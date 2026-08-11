import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-link" [class.logo-link--hero]="variant() === 'hero'">
      <img [src]="logoSrc" alt="Sicitalia – So schmeckt der Süden" class="logo-img" />
    </a>
  `,
  styles: `
    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-img {
      height: 46px;
      width: auto;
      display: block;
      transition: transform var(--transition);
    }

    .logo-link:hover .logo-img {
      transform: scale(1.03);
    }

    .logo-link--hero .logo-img {
      filter: drop-shadow(0 1px 8px rgba(255, 255, 255, 0.55))
        drop-shadow(0 2px 14px rgba(0, 0, 0, 0.35));
    }
  `,
})
export class Logo {
  readonly variant = input<'default' | 'hero'>('default');
  readonly logoSrc = IMAGES.logo;
}
