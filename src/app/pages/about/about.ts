import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-about',
  imports: [PageHero, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly sanitizer = inject(DomSanitizer);
  readonly contact = CONTACT;
  readonly images = IMAGES;
  readonly videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    CONTACT.youtubeVideo,
  );
}
