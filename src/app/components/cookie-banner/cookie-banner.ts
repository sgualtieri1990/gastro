import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../services/consent.service';

@Component({
  selector: 'app-cookie-banner',
  imports: [RouterLink],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.css',
})
export class CookieBanner {
  readonly consent = inject(ConsentService);

  /** Detailansicht mit den einzelnen Kategorien. */
  readonly details = signal(false);
  /** Auswahl für externe Medien in der Detailansicht. */
  readonly mediaChoice = signal(false);

  constructor() {
    effect(() => {
      if (this.consent.panelOpen()) {
        // Wer die Einstellungen erneut öffnet, sieht gleich die Details mit seiner bisherigen Auswahl.
        this.details.set(this.consent.decided());
        this.mediaChoice.set(this.consent.media());
      }
    });
  }

  toggleMedia(event: Event): void {
    this.mediaChoice.set((event.target as HTMLInputElement).checked);
  }

  saveSelection(): void {
    this.consent.save(this.mediaChoice());
  }
}
