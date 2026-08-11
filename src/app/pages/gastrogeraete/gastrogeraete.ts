import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-gastrogeraete',
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './gastrogeraete.html',
  styleUrl: './gastrogeraete.css',
})
export class Gastrogeraete {
  readonly images = IMAGES;
}
