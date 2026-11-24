import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-link" aria-label="Sicitalia – So schmeckt der Süden">
      @if (variant() === 'gold') {
        <span class="logo-img logo-gold" aria-hidden="true"></span>
      } @else {
        <img [src]="variant() === 'hero' ? '/images/logo-mark.png' : '/images/logo-mark-dark.png'" alt="" class="logo-img" />
      }
    </a>
  `,
  styles: `
    .logo-link {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      text-decoration: none;
    }

    .logo-img {
      display: block;
      height: 48px;
      width: calc(48px * 391 / 463);
      max-width: none;
      object-fit: contain;
      transition: transform var(--transition);
    }

    /* Goldene Einfärbung: Form des dunklen Logos als Maske, Füllung im Goldverlauf der Buttons */
    .logo-gold {
      background: linear-gradient(135deg, #f0cd7c 0%, #c89a3c 100%);
      -webkit-mask: url('/images/logo-mark-dark.png') center / contain no-repeat;
      mask: url('/images/logo-mark-dark.png') center / contain no-repeat;
    }

    .logo-link:hover .logo-img {
      transform: scale(1.03);
    }

    @media (max-width: 1100px) {
      .logo-img {
        height: 40px;
        width: calc(40px * 391 / 463);
      }
    }

    @media (max-width: 480px) {
      .logo-img {
        height: 36px;
        width: calc(36px * 391 / 463);
      }
    }
  `,
})
export class Logo {
  readonly variant = input<'default' | 'hero' | 'gold'>('default');
}
