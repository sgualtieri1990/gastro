import { Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { CONTACT, NAV_LEFT, NAV_RIGHT } from '../../data/site-content';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly router = inject(Router);

  readonly navLeft = NAV_LEFT;
  readonly navRight = NAV_RIGHT;
  readonly contact = CONTACT;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly onHome = signal(this.router.url === '/' || this.router.url === '');

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url.split('?')[0];
        this.onHome.set(url === '/' || url === '');
      });
  }

  get heroMode(): boolean {
    return this.onHome() && !this.scrolled();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
