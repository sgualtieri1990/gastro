import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, LEGAL_LINKS } from '../../data/site-content';
import { WhatsappChooserService } from '../../services/whatsapp-chooser.service';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly whatsapp = inject(WhatsappChooserService);

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

  openWhatsapp(event: Event): void {
    event.preventDefault();
    this.whatsapp.show();
  }
}
