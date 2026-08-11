import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PRODUCTS } from '../../data/site-content';

@Component({
  selector: 'app-products',
  imports: [ScrollRevealDirective],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  readonly products = PRODUCTS;
}
