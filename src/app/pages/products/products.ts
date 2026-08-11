import { Component } from '@angular/core';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES, PRODUCTS } from '../../data/site-content';

@Component({
  selector: 'app-products',
  imports: [PageHero, ScrollRevealDirective],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  readonly products = PRODUCTS;
  readonly images = IMAGES;
}
