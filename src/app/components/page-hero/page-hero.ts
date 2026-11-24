import { Component, input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES } from '../../data/site-content';

/** Kopfbereich der Unterseiten – im selben dunklen Look wie der Hero der Startseite. */
@Component({
  selector: 'app-page-hero',
  imports: [ScrollRevealDirective],
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.css',
})
export class PageHero {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly eyebrow = input<string>();
  readonly image = input<string>(IMAGES.hero);
  readonly bgPosition = input('center 20%');
}
