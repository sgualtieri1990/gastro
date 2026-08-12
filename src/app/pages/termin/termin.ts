import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentPicker } from '../../components/appointment-picker/appointment-picker';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES } from '../../data/site-content';
import { ProductInterestService } from '../../services/product-interest.service';

@Component({
  selector: 'app-termin',
  imports: [FormsModule, AppointmentPicker, PageHero, ScrollRevealDirective],
  templateUrl: './termin.html',
  styleUrl: './termin.css',
})
export class Termin implements OnInit {
  private readonly interest = inject(ProductInterestService);

  readonly contact = CONTACT;
  readonly images = IMAGES;
  readonly selectedProducts = this.interest.selectedProducts;

  name = '';
  email = '';
  phone = '';
  message = '';
  submitted = false;
  submittedSummary = '';

  selectedDate: Date | null = null;
  selectedTime: string | null = null;

  ngOnInit(): void {
    const inquiry = this.interest.buildInquiryText();
    if (inquiry) {
      this.message = inquiry;
    }
  }

  get canSubmit(): boolean {
    return Boolean(this.name && this.email && this.selectedDate && this.selectedTime);
  }

  onSubmit(): void {
    if (!this.name || !this.email || !this.selectedDate || !this.selectedTime) {
      return;
    }

    this.submittedSummary = `${this.selectedDate.toLocaleDateString('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })} · ${this.selectedTime} Uhr`;
    this.submitted = true;
    this.interest.clear();
  }
}
