import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PageHero } from '../../components/page-hero/page-hero';
import { CONTACT, IMAGES } from '../../data/site-content';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-kundenbereich',
  imports: [PageHero, RouterLink],
  templateUrl: './kundenbereich.html',
  styleUrl: './kundenbereich.css',
})
export class Kundenbereich {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly images = IMAGES;
  readonly contact = CONTACT;
  readonly user = this.auth.user;
  readonly downloads = this.auth.downloads;

  readonly address = computed(() => {
    const p = this.user()?.profile;
    return p ? [`${p.street ?? ''} ${p.houseNumber ?? ''}`.trim(), `${p.zip ?? ''} ${p.city ?? ''}`.trim()].filter(Boolean) : [];
  });
  readonly deliveryAddress = computed(() => {
    const p = this.user()?.profile;
    return p?.deliveryStreet
      ? [`${p.deliveryStreet} ${p.deliveryHouseNumber ?? ''}`.trim(), `${p.deliveryZip ?? ''} ${p.deliveryCity ?? ''}`.trim()]
      : [];
  });
  readonly billingAddress = computed(() => {
    const p = this.user()?.profile;
    return p?.billingStreet
      ? [`${p.billingStreet} ${p.billingHouseNumber ?? ''}`.trim(), `${p.billingZip ?? ''} ${p.billingCity ?? ''}`.trim()]
      : [];
  });

  async logout(): Promise<void> {
    await this.auth.logout();
    await this.router.navigateByUrl('/');
  }
}
