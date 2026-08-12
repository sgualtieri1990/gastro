import { Injectable, computed, signal } from '@angular/core';
import { CATALOG_PRODUCTS, CatalogProduct, PRODUCT_SERIES } from '../data/site-content';

const STORAGE_KEY = 'sicitalia-product-interest';

@Injectable({ providedIn: 'root' })
export class ProductInterestService {
  private readonly selectedIds = signal<Set<string>>(this.loadFromStorage());

  readonly selectedProducts = computed(() =>
    CATALOG_PRODUCTS.filter((product) => this.selectedIds().has(product.id)),
  );

  readonly count = computed(() => this.selectedIds().size);

  isSelected(productId: string): boolean {
    return this.selectedIds().has(productId);
  }

  toggle(productId: string): void {
    const next = new Set(this.selectedIds());
    if (next.has(productId)) {
      next.delete(productId);
    } else {
      next.add(productId);
    }
    this.persist(next);
  }

  clear(): void {
    this.persist(new Set());
  }

  buildInquiryText(): string {
    const products = this.selectedProducts();
    if (!products.length) {
      return '';
    }

    const lines = products.map((product) => this.formatProductLine(product));
    return ['Folgende Produkte interessieren mich:', ...lines.map((line) => `• ${line}`)].join('\n');
  }

  private formatProductLine(product: CatalogProduct): string {
    const series = product.seriesId
      ? PRODUCT_SERIES.find((item) => item.id === product.seriesId)?.name
      : product.line;
    const label = series ? `${series} – ${product.name}` : product.name;
    if (product.variants?.length) {
      return `${label} (${product.variants.map((variant) => variant.name).join(', ')})`;
    }
    return label;
  }

  private persist(next: Set<string>): void {
    this.selectedIds.set(next);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  }

  private loadFromStorage(): Set<string> {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return new Set();
      }
      const parsed = JSON.parse(raw) as string[];
      return new Set(parsed);
    } catch {
      return new Set();
    }
  }
}
