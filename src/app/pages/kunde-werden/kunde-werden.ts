import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-kunde-werden',
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './kunde-werden.html',
  styleUrl: './kunde-werden.css',
})
export class KundeWerden {
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
