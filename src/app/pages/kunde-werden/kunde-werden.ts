import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES } from '../../data/site-content';
import { ProductInterestService } from '../../services/product-interest.service';

@Component({
  selector: 'app-kunde-werden',
  imports: [FormsModule, PageHero, ScrollRevealDirective],
  templateUrl: './kunde-werden.html',
  styleUrl: './kunde-werden.css',
})
export class KundeWerden implements OnInit {
  private readonly interest = inject(ProductInterestService);

  readonly images = IMAGES;
  readonly selectedProducts = this.interest.selectedProducts;

  company = '';
  name = '';
  email = '';
  phone = '';
  businessType = '';
  productInterest = '';
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

  ngOnInit(): void {
    const inquiry = this.interest.buildInquiryText();
    if (inquiry) {
      this.productInterest = inquiry;
    }
  }

  onSubmit(): void {
    if (this.company && this.name && this.email && this.consent) {
      this.submitted = true;
      this.interest.clear();
    }
  }
}
