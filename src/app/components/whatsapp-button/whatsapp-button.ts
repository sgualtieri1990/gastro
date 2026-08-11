import { Component } from '@angular/core';
import { CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-whatsapp-button',
  template: `
    <a
      class="whatsapp-fab"
      [href]="contact.whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
        />
      </svg>
    </a>
  `,
  styles: `
    .whatsapp-fab {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: var(--color-brand-red);
      color: #fff;
      border-radius: 50%;
      box-shadow: 0 8px 32px rgba(178, 30, 35, 0.45);
      transition: transform var(--transition), box-shadow var(--transition);
    }

    .whatsapp-fab:hover {
      transform: scale(1.08);
      box-shadow: 0 12px 40px rgba(178, 30, 35, 0.55);
    }

    @media (max-width: 768px) {
      .whatsapp-fab {
        bottom: 20px;
        right: 20px;
        width: 52px;
        height: 52px;
      }
    }
  `,
})
export class WhatsappButton {
  readonly contact = CONTACT;
}
