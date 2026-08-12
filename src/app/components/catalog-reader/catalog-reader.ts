import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  model,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DownloadItem } from '../../data/site-content';

@Component({
  selector: 'app-catalog-reader',
  imports: [],
  templateUrl: './catalog-reader.html',
  styleUrl: './catalog-reader.css',
})
export class CatalogReader {
  readonly catalogs = input.required<DownloadItem[]>();
  readonly activeIndex = model<number | null>(null);

  private readonly sanitizer = inject(DomSanitizer);
  private readonly platformId = inject(PLATFORM_ID);

  readonly activeCatalog = computed(() => {
    const index = this.activeIndex();
    return index === null ? null : (this.catalogs()[index] ?? null);
  });

  readonly activeUrl = computed(() => {
    const catalog = this.activeCatalog();
    return catalog ? `/downloads/${catalog.file}` : null;
  });

  readonly embedUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.activeUrl();
    if (!url) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${url}#view=FitH&navpanes=0&toolbar=1`,
    );
  });

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      document.body.style.overflow = this.activeIndex() === null ? '' : 'hidden';
    });
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.activeIndex.set(null);
  }

  select(index: number): void {
    this.activeIndex.set(index);
  }

  next(): void {
    const index = this.activeIndex();
    if (index === null) {
      return;
    }
    this.activeIndex.set((index + 1) % this.catalogs().length);
  }

  prev(): void {
    const index = this.activeIndex();
    if (index === null) {
      return;
    }
    const count = this.catalogs().length;
    this.activeIndex.set((index - 1 + count) % count);
  }
}
