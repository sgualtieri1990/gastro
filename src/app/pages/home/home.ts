import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageHero } from '../../components/page-hero/page-hero';
import { HeroKeywordRoll } from '../../components/hero-keyword-roll/hero-keyword-roll';
import { CatalogReader } from '../../components/catalog-reader/catalog-reader';
import { InstagramReelsGallery } from '../../components/instagram-reels-gallery/instagram-reels-gallery';
import { ProductCatalog } from '../../components/product-catalog/product-catalog';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import {
  CONTACT,
  DOWNLOADS,
  HERO_KEYWORDS,
  HIGHLIGHTS,
  IMAGES,
  INSTAGRAM_REELS,
  INSTAGRAM_REEL_SERIES,
} from '../../data/site-content';
import { ScrollNavService } from '../../services/scroll-nav.service';

const FRAGMENT_SCROLL: Record<string, ScrollLogicalPosition> = {
  sortiment: 'start',
  geschaeftsfuehrer: 'start',
  'ueber-uns': 'start',
};

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    ScrollRevealDirective,
    PageHero,
    HeroKeywordRoll,
    ProductCatalog,
    InstagramReelsGallery,
    CatalogReader,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly scrollNav = inject(ScrollNavService);

  readonly downloads = DOWNLOADS;
  readonly instagramReels = INSTAGRAM_REELS;
  readonly reelSeriesTitle = INSTAGRAM_REEL_SERIES;
  readonly contact = CONTACT;
  readonly images = IMAGES;
  readonly highlights = HIGHLIGHTS;
  readonly heroKeywords = HERO_KEYWORDS;

  activeCatalogIndex: number | null = null;

  openCatalog(index: number): void {
    this.activeCatalogIndex = index;
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (!fragment) {
        return;
      }

      requestAnimationFrame(() => {
        this.scrollNav.scrollTo(fragment, FRAGMENT_SCROLL[fragment] ?? 'start');
      });
    });
  }

  scrollTo(event: Event, fragment: string): void {
    event.preventDefault();
    this.scrollNav.goHomeAndScroll(fragment, FRAGMENT_SCROLL[fragment] ?? 'start');
  }
}
