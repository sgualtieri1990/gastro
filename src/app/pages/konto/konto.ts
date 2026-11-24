import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PageHero } from '../../components/page-hero/page-hero';
import { IMAGES } from '../../data/site-content';
import { AuthFailure, AuthService, DEMO_EMAIL, authErrorMessage } from '../../services/auth.service';

type Mode = 'login' | 'forgot' | 'reset';

const TITLES: Record<Mode, string> = {
  login: 'Kundenbereich',
  forgot: 'Passwort vergessen',
  reset: 'Neues Passwort',
};

@Component({
  selector: 'app-konto',
  imports: [FormsModule, RouterLink, PageHero],
  templateUrl: './konto.html',
  styleUrl: './konto.css',
})
export class Konto implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly images = IMAGES;
  readonly demo = this.auth.demo;
  readonly demoEmail = DEMO_EMAIL;
  readonly mode = this.route.snapshot.data['mode'] as Mode;
  readonly title = TITLES[this.mode];
  readonly token = this.route.snapshot.queryParamMap.get('token') ?? '';

  readonly busy = signal(false);
  readonly error = signal('');
  readonly done = signal(false);
  readonly showPassword = signal(false);

  email = '';
  password = '';
  passwordRepeat = '';

  readonly tokenMissing = this.mode === 'reset' && !/^[a-f0-9]{64}$/.test(this.token);

  readonly canSubmit = computed(() => !this.busy());

  async ngOnInit(): Promise<void> {
    if (this.mode === 'login') {
      if (this.demo) {
        this.email = DEMO_EMAIL;
      }
      await this.auth.ensureLoaded();
      if (this.auth.loggedIn()) {
        await this.router.navigateByUrl('/kundenbereich');
      }
    }
  }

  get passwordsMatch(): boolean {
    return this.password === this.passwordRepeat;
  }

  get formValid(): boolean {
    switch (this.mode) {
      case 'login':
        return !!this.email.trim() && (this.demo || !!this.password);
      case 'forgot':
        return !!this.email.trim();
      default:
        return this.password.length >= 10 && this.passwordsMatch;
    }
  }

  async submit(): Promise<void> {
    if (!this.formValid || this.busy()) {
      return;
    }
    this.busy.set(true);
    this.error.set('');
    try {
      if (this.mode === 'login') {
        await this.auth.login(this.email.trim(), this.password);
        await this.router.navigateByUrl('/kundenbereich');
      } else if (this.mode === 'forgot') {
        await this.auth.forgotPassword(this.email.trim());
        this.done.set(true);
      } else {
        await this.auth.resetPassword(this.token, this.password);
        this.done.set(true);
      }
      this.password = '';
      this.passwordRepeat = '';
    } catch (error) {
      this.error.set(authErrorMessage(error instanceof AuthFailure ? error.code : 'server_error'));
    } finally {
      this.busy.set(false);
    }
  }
}
