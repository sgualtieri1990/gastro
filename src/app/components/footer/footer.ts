import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, LEGAL_LINKS } from '../../data/site-content';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, RouterLink, ScrollRevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
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
}
