import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-termin',
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './termin.html',
  styleUrl: './termin.css',
})
export class Termin {
  readonly contact = CONTACT;

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
