import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PRODUCTS,
  PortfolioProduct,
} from '../../data/portfolio-catalog';
import { demoPrice } from '../../data/demo-prices';
import { AuthService } from '../../services/auth.service';

const FLAVOR_COLORS: Record<string, string> = {
  nocciola: '#8a5a32',
  arachide: '#c4894a',
  vaniglia: '#f3e2b3',
  'vaniglia e': '#f3e2b3',
  menta: '#7dbe8a',
  yogurt: '#f7f1e8',
  'yogurt mango': '#f0b45a',
  malaga: '#d4a24a',
  stracciatella: '#f4efe8',
  'pistacchio sincero': '#8fad45',
  pistacchio: '#7ea33a',
  banana: '#f0d15a',
  cioccolato: '#5c3826',
  'caffè': '#6b4634',
  caffe: '#6b4634',
  'caramello salto': '#d4893a',
  tiramisù: '#c4a574',
  tiramisu: '#c4a574',
  spagnola: '#e8d7b0',
  croccantio: '#c47a3a',
  cookies: '#c4a07a',
  limone: '#f3e27a',
  cocco: '#f7f3ea',
  'sorbetto melone': '#f08a5a',
  'sorbetto mango': '#f0a030',
  'sorbetto fragola': '#e15b6a',
  unicorno: '#d7b4e8',
};

@Component({
  selector: 'app-produktportfolio',
  imports: [RouterLink],
  templateUrl: './produktportfolio.html',
  styleUrl: './produktportfolio.css',
})
export class Produktportfolio {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly auth = inject(AuthService);

  readonly loggedIn = this.auth.loggedIn;
  /** Vorschau: eingeloggte Besucher sehen Beispielpreise. */
  readonly showDemoPrices = computed(() => this.auth.demo && this.auth.loggedIn());

  readonly categories = PORTFOLIO_CATEGORIES;
  readonly total = PORTFOLIO_PRODUCTS.length;
  readonly activeCategory = signal('alle');
  readonly query = signal('');
  readonly selected = signal<PortfolioProduct | null>(null);

  readonly visible = computed(() => {
    const category = this.activeCategory();
    const query = this.query().trim().toLowerCase();
    return PORTFOLIO_PRODUCTS.filter((product) => {
      if (category !== 'alle' && product.categoryId !== category) {
        return false;
      }
      if (!query) {
        return true;
      }
      return product.name.toLowerCase().includes(query);
    });
  });

  countFor(categoryId: string): number {
    if (categoryId === 'alle') {
      return this.total;
    }
    return PORTFOLIO_PRODUCTS.filter((product) => product.categoryId === categoryId).length;
  }

  selectCategory(categoryId: string): void {
    this.activeCategory.set(categoryId);
  }

  onQuery(value: string): void {
    this.query.set(value);
  }

  open(product: PortfolioProduct): void {
    this.selected.set(product);
  }

  close(): void {
    this.selected.set(null);
  }

  flavorColor(name: string): string {
    return FLAVOR_COLORS[name.toLowerCase()] ?? '#e1c6a2';
  }

  flavorInk(name: string): string {
    const hex = this.flavorColor(name).replace('#', '');
    if (hex.length !== 6) {
      return '#3d2c2c';
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 160 ? '#3d2c2c' : '#fffaf4';
  }

  /** Echter Preis aus dem Katalog, in der Vorschau sonst ein Beispielpreis. */
  priceFor(product: PortfolioProduct): string | null {
    return this.catalogPrice(product) ?? (this.showDemoPrices() ? demoPrice(product.id) : null);
  }

  catalogPrice(product: PortfolioProduct): string | null {
    const match = product.meta.match(/(\d+,\d+\s*€)/);
    return match ? match[1].replace(/\s+/, ' ') : null;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.close();
    }
  }
}
