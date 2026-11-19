import { ViewportScroller } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../data/site-content';

@Injectable({ providedIn: 'root' })
export class ScrollNavService {
  private readonly router = inject(Router);
  private readonly scroller = inject(ViewportScroller);

  navigate(item: NavItem): void {
    if (item.external) {
      return;
    }

    if (item.fragment) {
      this.goHomeAndScroll(item.fragment, item.scrollBlock ?? 'start');
      return;
    }

    if (item.path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      void this.router.navigateByUrl('/');
      return;
    }

    void this.router.navigate([item.path]);
  }

  scrollTo(fragment: string, _block: ScrollLogicalPosition = 'start'): void {
    const element = document.getElementById(fragment);
    if (!element) {
      return;
    }

    const gap = this.scrollGap();
    this.scroller.setOffset([0, gap]);
    const top = element.getBoundingClientRect().top + window.scrollY - gap;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    element.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((node) => {
      node.classList.add('is-visible');
    });
  }

  /** Header plus room so the eyebrow stays visible under the menu. */
  private scrollGap(): number {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
    return header + 140;
  }

  goHomeAndScroll(fragment: string, block: ScrollLogicalPosition = 'start'): void {
    const onHome = this.isHomeRoute();

    if (onHome) {
      this.scrollTo(fragment, block);
      void this.router.navigate([], { fragment, replaceUrl: true });
      return;
    }

    void this.router.navigate(['/'], { fragment }).then(() => {
      requestAnimationFrame(() => {
        setTimeout(() => this.scrollTo(fragment, block), 50);
      });
    });
  }

  isHomeRoute(): boolean {
    const path = this.router.url.split('#')[0];
    return path === '/' || path === '';
  }
}
