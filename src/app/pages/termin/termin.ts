import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES } from '../../data/site-content';
import { ProductInterestService } from '../../services/product-interest.service';

@Component({
  selector: 'app-termin',
  imports: [FormsModule, PageHero, ScrollRevealDirective],
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

  ngOnInit(): void {
    const inquiry = this.interest.buildInquiryText();
    if (inquiry) {
      this.message = inquiry;
    }
  }

  onSubmit(): void {
    if (this.name && this.email) {
      this.submitted = true;
      this.interest.clear();
    }
  }
}
