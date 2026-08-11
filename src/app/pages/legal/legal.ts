import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-legal',
  imports: [PageHero, ScrollRevealDirective],
  templateUrl: './legal.html',
  styleUrl: './legal.css',
})
export class Legal {
  private readonly route = inject(ActivatedRoute);
  readonly title = this.route.snapshot.data['title'] as string;
  readonly contact = CONTACT;
  readonly images = IMAGES;
}
