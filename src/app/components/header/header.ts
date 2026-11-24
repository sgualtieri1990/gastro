import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';
import { CONTACT, NAV_LEFT, NAV_RIGHT, NavItem } from '../../data/site-content';
import { AuthService } from '../../services/auth.service';
import { ScrollNavService } from '../../services/scroll-nav.service';
import { WhatsappChooserService } from '../../services/whatsapp-chooser.service';

const HOME_SECTIONS = ['bestseller', 'liefernetz', 'kunde-werden', 'ueber-uns', 'pizzella', 'video-call'] as const;

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly scrollNav = inject(ScrollNavService);
  private readonly whatsapp = inject(WhatsappChooserService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly auth = inject(AuthService);

  readonly loggedIn = this.auth.loggedIn;

  readonly navLeft = NAV_LEFT;
  readonly navRight = NAV_RIGHT;
  readonly instagram = CONTACT.instagram;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  /** Leer = Startseite oben, sonst der Abschnitt unter der Navigationslinie. */
  readonly activeFragment = signal('');
  private homeLock = false;

  get heroMode(): boolean {
    return !this.scrolled();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      void this.auth.ensureLoaded();
      this.syncActiveSection();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
    this.syncActiveSection();
  }

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openWhatsapp(): void {
    this.closeMenu();
    this.whatsapp.show();
  }

  onNavClick(event: Event, item: NavItem): void {
    if (item.external || (!item.fragment && item.path !== '/')) {
      return;
    }

    event.preventDefault();
    this.closeMenu();
    if (!item.fragment && item.path === '/') {
      this.homeLock = true;
      this.activeFragment.set('');
    } else {
      this.homeLock = false;
    }
    this.scrollNav.navigate(item);
  }

  isActive(item: NavItem): boolean {
    const path = this.router.url.split(/[?#]/)[0] || '/';

    if (this.scrollNav.isHomeRoute()) {
      const current = this.activeFragment();
      if (item.fragment) {
        return item.fragment === current;
      }
      if (item.path === '/') {
        return current === '';
      }
      return false;
    }

    return !item.fragment && path === item.path;
  }

  private syncActiveSection(): void {
    if (!isPlatformBrowser(this.platformId) || !this.scrollNav.isHomeRoute()) {
      this.activeFragment.set('');
      return;
    }

    if (this.homeLock) {
      if (window.scrollY <= 40) {
        this.homeLock = false;
      }
      this.activeFragment.set('');
      return;
    }

    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
    const line = header + 140 + 64;
    let current = '';
    for (const id of HOME_SECTIONS) {
      const top = document.getElementById(id)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      if (top <= line) {
        current = id;
      }
    }
    this.activeFragment.set(current);
  }
}
