import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ConsentService } from '../../services/consent.service';

/** Bindet ein YouTube-Video erst nach Einwilligung ein; bis dahin steht ein Platzhalter da. */
@Component({
  selector: 'app-youtube-embed',
  imports: [RouterLink],
  template: `
    @if (consent.media()) {
      <iframe
        [src]="safeSrc()"
        [title]="title()"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    } @else {
      <div class="gate">
        @if (poster()) {
          <img class="gate-poster" [src]="poster()" alt="" />
        }
        <div class="gate-inner">
          <strong>Video von YouTube</strong>
          <p>
            Mit dem Laden des Videos werden Daten, z. B. Ihre IP-Adresse, an YouTube übertragen.
            Mehr dazu in der <a routerLink="/datenschutz">Datenschutzerklärung</a>.
          </p>
          <button type="button" class="gate-btn" (click)="consent.allowMedia()">Video laden</button>
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .gate {
      position: relative;
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
      background: #1c1c1c;
      color: #fff;
      text-align: center;
    }

    .gate-poster {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3;
    }

    .gate-inner {
      position: relative;
      display: grid;
      gap: 10px;
      justify-items: center;
      max-width: 460px;
    }

    .gate-inner p {
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.85);
    }

    .gate-inner a {
      color: #fff;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .gate-btn {
      padding: 12px 24px;
      border: 0;
      border-radius: 999px;
      background: #fff;
      color: #5c2e2e;
      font: inherit;
      font-weight: 600;
      cursor: pointer;
    }

    .gate-btn:hover {
      background: #faf6f0;
    }

    .gate-btn:focus-visible {
      outline: 3px solid #e85c1a;
      outline-offset: 2px;
    }
  `,
})
export class YoutubeEmbed {
  readonly consent = inject(ConsentService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly src = input.required<string>();
  readonly title = input.required<string>();
  readonly poster = input<string | null>(null);

  readonly safeSrc = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(this.src()));
}
