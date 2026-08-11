import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="logo-link" [class.logo-link--light]="variant() === 'light'">
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
      height: 52px;
      width: auto;
    }

    .logo-link--light .logo-img {
      filter: brightness(0) invert(1);
    }
  `,
})
export class Logo {
  readonly variant = input<'default' | 'light'>('default');
  readonly logoSrc = IMAGES.logo;
}
