import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-legal',
  imports: [ScrollRevealDirective],
  templateUrl: './legal.html',
  styleUrl: './legal.css',
})
export class Legal {
  private readonly route = inject(ActivatedRoute);
  readonly title = this.route.snapshot.data['title'] as string;
  readonly contact = CONTACT;
}
