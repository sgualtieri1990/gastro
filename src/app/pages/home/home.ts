import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { DOWNLOADS, INSTAGRAM_POSTS, CONTACT } from '../../data/site-content';

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

  readonly heroImage =
    'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=1200&q=80';
}
