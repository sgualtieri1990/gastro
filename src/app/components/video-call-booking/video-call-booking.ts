import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentPicker } from '../appointment-picker/appointment-picker';
import { CONTACT } from '../../data/site-content';
import { ProductInterestService } from '../../services/product-interest.service';
import { WhatsappChooserService } from '../../services/whatsapp-chooser.service';

@Component({
  selector: 'app-video-call-booking',
  imports: [FormsModule, AppointmentPicker],
  templateUrl: './video-call-booking.html',
  styleUrl: './video-call-booking.css',
})
export class VideoCallBooking implements OnInit {
  private readonly interest = inject(ProductInterestService);
  private readonly whatsapp = inject(WhatsappChooserService);

  readonly contact = CONTACT;
  readonly selectedProducts = this.interest.selectedProducts;

  company = '';
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

  openWhatsapp(event: Event): void {
    event.preventDefault();
    this.whatsapp.show();
  }
}
