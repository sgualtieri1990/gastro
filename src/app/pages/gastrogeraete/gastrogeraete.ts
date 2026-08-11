import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-gastrogeraete',
  imports: [RouterLink, PageHero, ScrollRevealDirective],
  templateUrl: './gastrogeraete.html',
  styleUrl: './gastrogeraete.css',
})
export class Gastrogeraete {
  readonly images = IMAGES;
}
