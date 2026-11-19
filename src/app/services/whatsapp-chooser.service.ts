import { Injectable, signal } from '@angular/core';
import { CONTACT } from '../data/site-content';

export type CustomerKind = 'b2b' | 'b2c';

const CUSTOMER_NOTICE: Record<CustomerKind, string> = {
  b2b: 'Hinweis: Kundenart B2B Gewerbekunde',
  b2c: 'Hinweis: Kundenart B2C Privatverbraucher',
};

@Injectable({ providedIn: 'root' })
export class WhatsappChooserService {
  readonly open = signal(false);

  show(): void {
    this.open.set(true);
  }

  close(): void {
    this.open.set(false);
  }

  continueAs(kind: CustomerKind): void {
    const text = `Hallo Sicitalia!\n${CUSTOMER_NOTICE[kind]}.`;
    const url = `${CONTACT.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    this.close();
  }
}
