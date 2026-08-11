import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-kunde-werden',
  imports: [FormsModule, PageHero, ScrollRevealDirective],
  templateUrl: './kunde-werden.html',
  styleUrl: './kunde-werden.css',
})
export class KundeWerden {
  readonly images = IMAGES;

  company = '';
  name = '';
  email = '';
  phone = '';
  businessType = '';
  consent = false;
  submitted = false;

  readonly businessTypes = [
    'Gastronomie',
    'Feinkosthandel',
    'Bäckerei / Konditorei',
    'Café / Bar',
    'Eisdiele',
    'Foodtruck / Streetfood',
    'Sonstiges',
  ];

  onSubmit(): void {
    if (this.company && this.name && this.email && this.consent) {
      this.submitted = true;
    }
  }
}
