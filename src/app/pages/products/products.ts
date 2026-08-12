import { Component } from '@angular/core';
import { PageHero } from '../../components/page-hero/page-hero';
import { ProductCatalog } from '../../components/product-catalog/product-catalog';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-products',
  imports: [PageHero, ProductCatalog],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  readonly images = IMAGES;
}
