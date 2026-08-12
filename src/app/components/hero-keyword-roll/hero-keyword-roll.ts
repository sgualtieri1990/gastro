import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hero-keyword-roll',
  templateUrl: './hero-keyword-roll.html',
  styleUrl: './hero-keyword-roll.css',
})
export class HeroKeywordRoll implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly keywords = input.required<string[]>();
  readonly activeIndex = signal(0);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    interval(2600)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        const total = this.keywords().length;
        if (total === 0) {
          return;
        }
        this.activeIndex.update(i => (i + 1) % total);
      });
  }

  isActive(index: number): boolean {
    return index === this.activeIndex();
  }

  isNear(index: number): boolean {
    return Math.abs(index - this.activeIndex()) === 1;
  }

  trackOffset(): string {
    const centerSlot = 2;
    return `translateY(calc(${centerSlot - this.activeIndex()} * var(--roll-item-height)))`;
  }
}
