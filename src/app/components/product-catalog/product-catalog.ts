import { Component, computed, input, signal } from '@angular/core';
import { ProductInterestBar } from '../product-interest-bar/product-interest-bar';
import { ProductPortfolioCard } from '../product-portfolio-card/product-portfolio-card';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  CATALOG_PRODUCTS,
  PRODUCT_CATEGORIES,
  PRODUCT_SERIES,
} from '../../data/site-content';

@Component({
  selector: 'app-product-catalog',
  imports: [ProductInterestBar, ProductPortfolioCard, ScrollRevealDirective],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog {
  readonly sectionId = input('sortiment');
  readonly compactIntro = input(false);

  readonly categories = PRODUCT_CATEGORIES;
  readonly activeCategory = signal<string>('all');

  readonly visibleCategories = computed(() => {
    const active = this.activeCategory();
    if (active === 'all') {
      return this.categories;
    }
    return this.categories.filter((category) => category.id === active);
  });

  seriesForCategory(categoryId: string) {
    return PRODUCT_SERIES.filter((series) => series.categoryId === categoryId);
  }

  productsForSeries(seriesId: string) {
    return CATALOG_PRODUCTS.filter((product) => product.seriesId === seriesId);
  }

  standaloneProductsForCategory(categoryId: string) {
    return CATALOG_PRODUCTS.filter(
      (product) => product.categoryId === categoryId && !product.seriesId,
    );
  }

  setCategory(categoryId: string): void {
    this.activeCategory.set(categoryId);
  }
}
