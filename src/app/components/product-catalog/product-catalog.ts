import { afterNextRender, Component, computed, inject, Injector, input, signal } from '@angular/core';
import { ProductInterestBar } from '../product-interest-bar/product-interest-bar';
import { ProductPortfolioCard } from '../product-portfolio-card/product-portfolio-card';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  CATALOG_PRODUCTS,
  CatalogProduct,
  PRODUCT_CATEGORIES,
  PRODUCT_SERIES,
  ProductCategory,
} from '../../data/site-content';

interface BrowseEntry {
  id: string;
  categoryId: string;
  seriesId?: string;
  name: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'app-product-catalog',
  imports: [ProductInterestBar, ProductPortfolioCard, ScrollRevealDirective],
  templateUrl: './product-catalog.html',
  styleUrl: './product-catalog.css',
})
export class ProductCatalog {
  private readonly injector = inject(Injector);

  readonly sectionId = input('sortiment');
  readonly compactIntro = input(false);

  readonly browseEntries: BrowseEntry[] = this.buildBrowseEntries();
  readonly activeBrowseId = signal<string | null>(null);

  readonly activeEntry = computed(() => {
    const id = this.activeBrowseId();
    if (!id) {
      return null;
    }
    return this.browseEntries.find((entry) => entry.id === id) ?? null;
  });

  readonly activeCategory = computed((): ProductCategory | null => {
    const entry = this.activeEntry();
    if (!entry) {
      return null;
    }
    return PRODUCT_CATEGORIES.find((category) => category.id === entry.categoryId) ?? null;
  });

  readonly activeProducts = computed((): CatalogProduct[] => {
    const entry = this.activeEntry();
    if (!entry) {
      return [];
    }
    if (entry.seriesId) {
      return CATALOG_PRODUCTS.filter((product) => product.seriesId === entry.seriesId);
    }
    return CATALOG_PRODUCTS.filter(
      (product) => product.categoryId === entry.categoryId && !product.seriesId,
    );
  });

  openBrowse(entryId: string): void {
    this.activeBrowseId.set(entryId);

    afterNextRender(
      () => {
        const section = document.getElementById('portfolio-detail');
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        section?.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((element) => {
          element.classList.add('is-visible');
        });
      },
      { injector: this.injector },
    );
  }

  closeBrowse(): void {
    this.activeBrowseId.set(null);

    afterNextRender(
      () => {
        document.getElementById(this.sectionId())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
      { injector: this.injector },
    );
  }

  private buildBrowseEntries(): BrowseEntry[] {
    const seriesEntries: BrowseEntry[] = PRODUCT_SERIES.map((series) => ({
      id: series.id,
      categoryId: series.categoryId,
      seriesId: series.id,
      name: series.name,
      description: series.description,
      coverImage: series.coverImage,
    }));

    const categoriesWithSeries = new Set(PRODUCT_SERIES.map((series) => series.categoryId));
    const categoryEntries: BrowseEntry[] = PRODUCT_CATEGORIES.filter(
      (category) => !categoriesWithSeries.has(category.id),
    ).map((category) => ({
      id: category.id,
      categoryId: category.id,
      name: category.name,
      description: category.description,
      coverImage: category.coverImage,
    }));

    return [...seriesEntries, ...categoryEntries];
  }
}
