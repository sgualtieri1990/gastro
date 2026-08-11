import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-link" [class.logo-link--light]="variant() === 'light'">
      <svg class="logo-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="8" fill="#e85c1a" />
        <path
          d="M24 4 A20 20 0 0 1 44 24"
          stroke="#b21e23"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
        <path
          d="M24 4 A20 20 0 0 0 4 24"
          stroke="#5c2e2e"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
      <span class="logo-text">
        <span class="logo-name">sicitalia</span>
        <span class="logo-tagline">So schmeckt der Süden</span>
      </span>
    </a>
  `,
  styles: `
    .logo-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .logo-icon {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }

    .logo-name {
      font-family: var(--font-body);
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-brand-dark);
      letter-spacing: -0.02em;
    }

    .logo-tagline {
      font-size: 0.7rem;
      font-weight: 400;
      color: var(--color-brand-red);
      letter-spacing: 0.02em;
    }

    .logo-link--light .logo-name {
      color: var(--color-text-inverse);
    }

    .logo-link--light .logo-tagline {
      color: rgba(255, 255, 255, 0.75);
    }
  `,
})
export class Logo {
  readonly variant = input<'default' | 'light'>('default');
}
