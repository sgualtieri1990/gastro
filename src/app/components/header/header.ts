import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../logo/logo';
import { CONTACT, NAV_LEFT, NAV_RIGHT } from '../../data/site-content';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
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
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
