import { Component, computed, inject, input, signal } from '@angular/core';
import { CatalogProduct } from '../../data/site-content';
import { ProductInterestService } from '../../services/product-interest.service';

@Component({
  selector: 'app-product-portfolio-card',
  templateUrl: './product-portfolio-card.html',
  styleUrl: './product-portfolio-card.css',
})
export class ProductPortfolioCard {
  readonly product = input.required<CatalogProduct>();

  private readonly interest = inject(ProductInterestService);

  readonly activeImage = signal<string | null>(null);
  readonly activeVariantId = signal<string | null>(null);

  readonly galleryImages = computed(() => {
    const product = this.product();
    const images = [...product.gallery];
    for (const variant of product.variants ?? []) {
      if (variant.detailImage && !images.includes(variant.detailImage)) {
        images.push(variant.detailImage);
      }
    }
    return images;
  });

  readonly currentImage = computed(() => {
    const manual = this.activeImage();
    if (manual) {
      return manual;
    }
    const variantId = this.activeVariantId();
    const variant = this.product().variants?.find((item) => item.id === variantId);
    if (variant?.detailImage) {
      return variant.detailImage;
    }
    return this.product().coverImage;
  });

  readonly isSelected = computed(() =>
    this.interest.selectedProducts().some((item) => item.id === this.product().id),
  );

  selectImage(image: string): void {
    this.activeImage.set(image);
  }

  selectVariant(variantId: string, image?: string): void {
    this.activeVariantId.set(variantId);
    this.activeImage.set(image ?? null);
  }

  toggleInterest(): void {
    this.interest.toggle(this.product().id);
  }
}
