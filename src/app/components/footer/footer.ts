import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, LEGAL_LINKS } from '../../data/site-content';
import { ConsentService } from '../../services/consent.service';
import { WhatsappChooserService } from '../../services/whatsapp-chooser.service';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly whatsapp = inject(WhatsappChooserService);
  private readonly cookieConsent = inject(ConsentService);

  readonly contact = CONTACT;
  readonly legalLinks = LEGAL_LINKS;
  readonly currentYear = new Date().getFullYear();

  email = '';
  consent = false;
  submitted = false;

  onSubmit(): void {
    if (this.email && this.consent) {
      this.submitted = true;
    }
  }

  openCookieSettings(event: Event): void {
    event.preventDefault();
    this.cookieConsent.openSettings();
  }

  openWhatsapp(event: Event): void {
    event.preventDefault();
    this.whatsapp.show();
  }
}
