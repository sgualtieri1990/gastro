import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-termin',
  imports: [FormsModule, PageHero, ScrollRevealDirective],
  templateUrl: './termin.html',
  styleUrl: './termin.css',
})
export class Termin {
  readonly contact = CONTACT;
  readonly images = IMAGES;

  name = '';
  email = '';
  phone = '';
  message = '';
  submitted = false;

  onSubmit(): void {
    if (this.name && this.email) {
      this.submitted = true;
    }
  }
}
