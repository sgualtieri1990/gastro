import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  CONTACT,
  DOWNLOADS,
  HIGHLIGHTS,
  IMAGES,
  INSTAGRAM_POSTS,
  TRUST_STATS,
} from '../../data/site-content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly downloads = DOWNLOADS;
  readonly instagramPosts = INSTAGRAM_POSTS;
  readonly contact = CONTACT;
  readonly images = IMAGES;
  readonly trustStats = TRUST_STATS;
  readonly highlights = HIGHLIGHTS;
}
