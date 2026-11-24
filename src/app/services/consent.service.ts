import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

const STORAGE_KEY = 'sicitalia-consent';
/** Bei neuen Kategorien oder geänderten Zwecken erhöhen, damit erneut gefragt wird. */
const CONSENT_VERSION = 1;

interface StoredConsent {
  version: number;
  /** Einwilligung für externe Medien (YouTube). */
  media: boolean;
  decidedAt: string;
}

@Injectable({ providedIn: 'root' })
export class ConsentService {
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly stored = signal<StoredConsent | null>(this.read());

  /** Hat der Besucher bereits eine Auswahl getroffen? */
  readonly decided = computed(() => this.stored() !== null);
  /** Dürfen externe Medien (YouTube) geladen werden? */
  readonly media = computed(() => this.stored()?.media === true);
  /** Banner bzw. Einstellungen sichtbar? Beim Erstaufruf automatisch. */
  readonly panelOpen = signal(this.browser && this.stored() === null);

  acceptAll(): void {
    this.save(true);
  }

  rejectOptional(): void {
    this.save(false);
  }

  /** Aus dem Platzhalter heraus: Einwilligung nur für externe Medien erteilen. */
  allowMedia(): void {
    this.save(true);
  }

  save(media: boolean): void {
    const value: StoredConsent = {
      version: CONSENT_VERSION,
      media,
      decidedAt: new Date().toISOString(),
    };
    this.stored.set(value);
    this.panelOpen.set(false);

    if (this.browser) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      } catch {
        // Speicher nicht verfügbar: Auswahl gilt nur für diese Sitzung.
      }
    }
  }

  openSettings(): void {
    this.panelOpen.set(true);
  }

  closeSettings(): void {
    this.panelOpen.set(false);
  }

  private read(): StoredConsent | null {
    if (!this.browser) {
      return null;
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw) as StoredConsent;
      return parsed.version === CONSENT_VERSION && typeof parsed.media === 'boolean' ? parsed : null;
    } catch {
      return null;
    }
  }
}
