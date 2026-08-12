import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../data/site-content';

@Injectable({ providedIn: 'root' })
export class ScrollNavService {
  private readonly router = inject(Router);

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
      void this.router.navigate(['/']);
      return;
    }

    void this.router.navigate([item.path]);
  }

  scrollTo(fragment: string, block: ScrollLogicalPosition = 'start'): void {
    const element = document.getElementById(fragment);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block });
    element.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((node) => {
      node.classList.add('is-visible');
    });
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
