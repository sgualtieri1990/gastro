import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../components/page-hero/page-hero';
import { HeroKeywordRoll } from '../../components/hero-keyword-roll/hero-keyword-roll';
import { ProductCatalog } from '../../components/product-catalog/product-catalog';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  CONTACT,
  DOWNLOADS,
  HERO_KEYWORDS,
  HIGHLIGHTS,
  IMAGES,
  INSTAGRAM_POSTS,
  TRUST_STATS,
} from '../../data/site-content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ScrollRevealDirective, PageHero, HeroKeywordRoll, ProductCatalog],
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
  readonly heroKeywords = HERO_KEYWORDS;
}
