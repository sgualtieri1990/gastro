import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  PLATFORM_ID,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { InstagramReel } from '../../data/site-content';

@Component({
  selector: 'app-instagram-reels-gallery',
  imports: [],
  templateUrl: './instagram-reels-gallery.html',
  styleUrl: './instagram-reels-gallery.css',
})
export class InstagramReelsGallery {
  readonly reels = input.required<InstagramReel[]>();
  readonly instagramUrl = input.required<string>();
  readonly seriesTitle = input('DIY Pasticceria');

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly activeIndex = signal(0);

  readonly activeReel = computed(() => {
    const items = this.reels();
    return items[this.activeIndex()] ?? items[0];
  });

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    interval(5500)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.next());
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }

  next(): void {
    const count = this.reels().length;
    if (!count) {
      return;
    }
    this.activeIndex.update((index) => (index + 1) % count);
  }

  prev(): void {
    const count = this.reels().length;
    if (!count) {
      return;
    }
    this.activeIndex.update((index) => (index - 1 + count) % count);
  }

  openReel(reel: InstagramReel): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.open(reel.reelUrl, '_blank', 'noopener,noreferrer');
  }

  cardOffset(index: number): number {
    const count = this.reels().length;
    const active = this.activeIndex();
    let offset = index - active;

    if (offset > count / 2) {
      offset -= count;
    } else if (offset < -count / 2) {
      offset += count;
    }

    return offset;
  }
}
