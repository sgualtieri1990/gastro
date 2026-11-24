import { Component } from '@angular/core';
import { PageHero } from '../../components/page-hero/page-hero';
import { YoutubeEmbed } from '../../components/youtube-embed/youtube-embed';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT, IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-about',
  imports: [PageHero, ScrollRevealDirective, YoutubeEmbed],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly contact = CONTACT;
  readonly images = IMAGES;
}
