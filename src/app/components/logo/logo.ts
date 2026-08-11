import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-link" [class.logo-link--light]="variant() === 'light'">
      <img [src]="logoSrc" alt="Sicitalia" class="logo-img" />
      @if (variant() === 'light') {
        <span class="logo-wordmark">sicitalia</span>
      }
    </a>
  `,
  styles: `
    .logo-link {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .logo-img {
      height: 48px;
      width: auto;
      transition: transform var(--transition);
    }

    .logo-link:hover .logo-img {
      transform: scale(1.05);
    }

    .logo-wordmark {
      font-family: 'Oswald', sans-serif;
      font-size: 1.15rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #fff;
      line-height: 1;
    }

    .logo-link--light .logo-img {
      filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(5deg);
    }
  `,
})
export class Logo {
  readonly variant = input<'default' | 'light'>('default');
  readonly logoSrc = IMAGES.logo;
}
