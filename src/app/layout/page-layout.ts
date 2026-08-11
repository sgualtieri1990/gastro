import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { WhatsappButton } from '../components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  template: `
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
    }

    .main-content {
      flex: 1;
      padding-top: var(--header-height);
    }
  `,
})
export class PageLayout {}
