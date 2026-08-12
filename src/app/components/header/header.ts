import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';
import { CONTACT, NAV_LEFT, NAV_RIGHT, NavItem } from '../../data/site-content';
import { ScrollNavService } from '../../services/scroll-nav.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly router = inject(Router);
  private readonly scrollNav = inject(ScrollNavService);

  readonly navLeft = NAV_LEFT;
  readonly navRight = NAV_RIGHT;
  readonly contact = CONTACT;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  get heroMode(): boolean {
    return !this.scrolled();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  onNavClick(event: Event, item: NavItem): void {
    if (item.external || (!item.fragment && item.path !== '/')) {
      return;
    }

    event.preventDefault();
    this.closeMenu();
    this.scrollNav.navigate(item);
  }

  isActive(item: NavItem): boolean {
    if (item.fragment) {
      return this.scrollNav.isHomeRoute() && this.router.url.includes(`#${item.fragment}`);
    }

    if (item.path === '/') {
      return this.scrollNav.isHomeRoute() && !this.router.url.includes('#');
    }

    return this.router.url.split('#')[0] === item.path;
  }
}
