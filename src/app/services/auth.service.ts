import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { DOWNLOADS } from '../data/site-content';

export interface Profile {
  position?: string;
  businessType?: string;
  legalForm?: string;
  street?: string;
  houseNumber?: string;
  zip?: string;
  city?: string;
  deliveryStreet?: string;
  deliveryHouseNumber?: string;
  deliveryZip?: string;
  deliveryCity?: string;
  billingStreet?: string;
  billingHouseNumber?: string;
  billingZip?: string;
  billingCity?: string;
  billingEmail?: string;
  phone?: string;
  phoneAlt?: string;
  vatId?: string;
  deliveryStart?: string;
  productInterest?: string;
  contactVia?: string[];
}

export interface CustomerUser {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  status: string;
  profile: Profile;
  createdAt: string;
}

export interface DownloadLink {
  id: string;
  label: string;
  url: string;
  image?: string;
}

export interface RegistrationPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  consent: true;
  profile: Profile;
}

/** Fehlercodes der API (siehe public/api). */
export type AuthError =
  | 'invalid_credentials'
  | 'pending'
  | 'disabled'
  | 'too_many_requests'
  | 'weak_password'
  | 'invalid_input'
  | 'invalid_token'
  | 'network'
  | 'server_error';

export class AuthFailure extends Error {
  constructor(readonly code: AuthError) {
    super(code);
  }
}

interface SessionResponse {
  user: CustomerUser;
  downloads: DownloadLink[];
}

const API = '/api';
const HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };

/** Vorschau-Version: fester Demo-Zugang ohne Backend. Das Passwort darf leer bleiben. */
export const DEMO_EMAIL = 'demo@sicitalia.eu';
const DEMO_STORAGE_KEY = 'sicitalia-demo-session';
const DEMO_USER: CustomerUser = {
  email: DEMO_EMAIL,
  firstName: 'Mario',
  lastName: 'Rossi',
  company: 'Ristorante Bella Italia',
  status: 'active',
  createdAt: '2026-11-01 09:00:00',
  profile: {
    street: 'Musterstraße',
    houseNumber: '12',
    zip: '47269',
    city: 'Duisburg',
    billingEmail: 'buchhaltung@bella-italia.example',
    phone: '+49 203 000000',
    vatId: 'DE000000000',
    contactVia: ['E-Mail'],
  },
};
const DEMO_DOWNLOADS: DownloadLink[] = [
  ...DOWNLOADS.map((item) => ({
    id: item.file,
    label: item.title,
    url: `/downloads/${item.file}`,
    image: item.image,
  })),
  { id: 'portfolio-katalog.pdf', label: 'Portfolio-Katalog', url: '/downloads/portfolio-katalog.pdf' },
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  private readonly userState = signal<CustomerUser | null>(null);
  private readonly downloadState = signal<DownloadLink[]>([]);
  private loading: Promise<void> | null = null;

  readonly user = this.userState.asReadonly();
  readonly downloads = this.downloadState.asReadonly();
  readonly loggedIn = computed(() => this.userState() !== null);
  readonly demo = environment.demo;

  /** Prüft einmalig, ob eine Sitzung besteht. Mehrfachaufrufe teilen sich die Anfrage. */
  ensureLoaded(): Promise<void> {
    this.loading ??= this.refresh();
    return this.loading;
  }

  private async refresh(): Promise<void> {
    if (this.demo) {
      this.apply(AuthService.readDemoSession());
      return;
    }
    try {
      this.apply(await firstValueFrom(this.http.get<SessionResponse>(`${API}/me.php`, { headers: HEADERS })));
    } catch {
      this.apply(null);
    }
  }

  async login(email: string, password: string): Promise<void> {
    if (this.demo) {
      if (email.trim().toLowerCase() !== DEMO_EMAIL) {
        throw new AuthFailure('invalid_credentials');
      }
      this.startDemoSession(DEMO_USER);
      this.loading = Promise.resolve();
      return;
    }
    this.apply(await this.post<SessionResponse>('login.php', { email, password }));
    this.loading = Promise.resolve();
  }

  async logout(): Promise<void> {
    if (this.demo) {
      sessionStorage.removeItem(DEMO_STORAGE_KEY);
      this.apply(null);
      this.loading = Promise.resolve();
      return;
    }
    try {
      await this.post('logout.php', {});
    } finally {
      this.apply(null);
      this.loading = Promise.resolve();
    }
  }

  register(payload: RegistrationPayload): Promise<unknown> {
    if (this.demo) {
      // Vorschau: nichts wird übertragen. Die Angaben dienen nur der Anzeige im eigenen Browser,
      // und die Person ist sofort eingeloggt (in der echten Version erst nach Freischaltung).
      this.startDemoSession({
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        company: payload.company,
        status: 'active',
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        profile: { ...payload.profile },
      });
      return Promise.resolve();
    }
    return this.post('register.php', payload);
  }

  private startDemoSession(user: CustomerUser): void {
    sessionStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(user));
    this.apply({ user, downloads: DEMO_DOWNLOADS });
    this.loading = Promise.resolve();
  }

  private static readDemoSession(): SessionResponse | null {
    const raw = sessionStorage.getItem(DEMO_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    try {
      const user = JSON.parse(raw) as CustomerUser;
      return user?.email ? { user, downloads: DEMO_DOWNLOADS } : { user: DEMO_USER, downloads: DEMO_DOWNLOADS };
    } catch {
      return { user: DEMO_USER, downloads: DEMO_DOWNLOADS };
    }
  }

  forgotPassword(email: string): Promise<unknown> {
    if (this.demo) {
      return Promise.resolve();
    }
    return this.post('forgot.php', { email });
  }

  resetPassword(token: string, password: string): Promise<unknown> {
    if (this.demo) {
      return Promise.resolve();
    }
    return this.post('reset.php', { token, password });
  }

  private apply(session: SessionResponse | null): void {
    this.userState.set(session?.user ?? null);
    this.downloadState.set(session?.downloads ?? []);
  }

  private async post<T = unknown>(endpoint: string, body: unknown): Promise<T> {
    try {
      return await firstValueFrom(this.http.post<T>(`${API}/${endpoint}`, body, { headers: HEADERS }));
    } catch (error) {
      throw new AuthFailure(AuthService.toCode(error));
    }
  }

  private static toCode(error: unknown): AuthError {
    if (!(error instanceof HttpErrorResponse)) {
      return 'network';
    }
    const code = (error.error as { error?: string } | null)?.error;
    const known: AuthError[] = [
      'invalid_credentials',
      'pending',
      'disabled',
      'too_many_requests',
      'weak_password',
      'invalid_input',
      'invalid_token',
    ];
    if (code && (known as string[]).includes(code)) {
      return code as AuthError;
    }
    return error.status === 0 || error.status === 502 || error.status === 504 ? 'network' : 'server_error';
  }
}

/** Verständliche Meldungen für die Oberfläche. */
export function authErrorMessage(code: AuthError): string {
  switch (code) {
    case 'invalid_credentials':
      return 'E-Mail-Adresse oder Passwort stimmen nicht.';
    case 'pending':
      return 'Dein Konto wird noch geprüft. Sobald es freigeschaltet ist, erhältst Du eine E-Mail von uns.';
    case 'disabled':
      return 'Dieses Konto ist nicht aktiv. Bitte kontaktiere uns.';
    case 'too_many_requests':
      return 'Zu viele Versuche. Bitte warte einen Moment und versuche es später erneut.';
    case 'weak_password':
      return 'Das Passwort muss mindestens 10 Zeichen lang sein.';
    case 'invalid_input':
      return 'Bitte prüfe Deine Angaben und versuche es erneut.';
    case 'invalid_token':
      return 'Dieser Link ist ungültig oder abgelaufen. Bitte fordere einen neuen an.';
    case 'network':
      return 'Der Server ist gerade nicht erreichbar. Bitte versuche es später erneut.';
    default:
      return 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.';
  }
}
