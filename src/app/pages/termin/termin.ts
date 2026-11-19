import { Component } from '@angular/core';
import { PageHero } from '../../components/page-hero/page-hero';
import { VideoCallBooking } from '../../components/video-call-booking/video-call-booking';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { IMAGES } from '../../data/site-content';

@Component({
  selector: 'app-termin',
  imports: [PageHero, VideoCallBooking, ScrollRevealDirective],
  templateUrl: './termin.html',
})
export class Termin {
  readonly images = IMAGES;
}
