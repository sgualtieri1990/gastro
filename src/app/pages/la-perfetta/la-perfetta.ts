import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-la-perfetta',
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './la-perfetta.html',
  styleUrl: './la-perfetta.css',
})
export class LaPerfetta {}
