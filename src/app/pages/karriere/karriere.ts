import { Component } from '@angular/core';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES, JOB_OPENINGS } from '../../data/site-content';

@Component({
  selector: 'app-karriere',
  imports: [PageHero, ScrollRevealDirective],
  templateUrl: './karriere.html',
  styleUrl: './karriere.css',
})
export class Karriere {
  readonly contact = CONTACT;
  readonly images = IMAGES;
  readonly jobs = JOB_OPENINGS;

  applyLink(title: string): string {
    const subject = encodeURIComponent(`Bewerbung: ${title}`);
    return `mailto:${CONTACT.email}?subject=${subject}`;
  }
}
