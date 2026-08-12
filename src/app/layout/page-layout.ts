import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { WhatsappButton } from '../components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  template: `
    <div class="ambient-bg" aria-hidden="true">
      <div class="food-pattern-bg"></div>
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="orb orb-3"></span>
    </div>
    <app-header />
    <main class="main-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      position: relative;
    }

    .main-content {
      flex: 1;
      padding-top: var(--header-height);
      position: relative;
      z-index: 1;
    }
  `,
})
export class PageLayout {}
