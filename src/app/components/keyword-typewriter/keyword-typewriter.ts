import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  OnInit,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';

const TYPE_SPEED = 75;
const ERASE_SPEED = 38;
const HOLD_TIME = 1900;
const PAUSE_TIME = 450;

/** Tippt Stichworte mittig Zeichen für Zeichen, löscht sie wieder und zeigt das nächste. */
@Component({
  selector: 'app-keyword-typewriter',
  template: `
    <p class="typewriter" aria-hidden="true">
      <span class="typewriter-text">{{ text() }}</span><span class="typewriter-caret"></span>
    </p>
    <ul class="sr-only">
      @for (word of words(); track word) {
        <li>{{ word }}</li>
      }
    </ul>
  `,
  styles: `
    .typewriter {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 1.6em;
      margin: 0;
      font-family: 'Courier New', Courier, ui-monospace, monospace;
      font-size: clamp(0.95rem, 1.9vw, 1.3rem);
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--color-text);
      white-space: nowrap;
    }

    .typewriter-caret {
      display: inline-block;
      width: 0.55em;
      height: 1.15em;
      margin-left: 0.2em;
      background: var(--color-brand-orange);
      animation: typewriter-blink 1s steps(1) infinite;
    }

    @keyframes typewriter-blink {
      50% {
        opacity: 0;
      }
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .typewriter-caret {
        animation: none;
      }
    }
  `,
})
export class KeywordTypewriter implements OnInit {
  readonly words = input.required<string[]>();

  readonly text = signal('');

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private timer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const words = this.words();
    if (!words.length) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.text.set(words[0]);
      return;
    }

    this.destroyRef.onDestroy(() => clearTimeout(this.timer));
    this.tick(0, 0, false);
  }

  private tick(wordIndex: number, count: number, erasing: boolean): void {
    const words = this.words();
    const word = words[wordIndex % words.length];

    if (!erasing) {
      if (count < word.length) {
        this.text.set(word.slice(0, count + 1));
        this.schedule(() => this.tick(wordIndex, count + 1, false), TYPE_SPEED);
      } else {
        this.schedule(() => this.tick(wordIndex, count, true), HOLD_TIME);
      }
      return;
    }

    if (count > 0) {
      this.text.set(word.slice(0, count - 1));
      this.schedule(() => this.tick(wordIndex, count - 1, true), ERASE_SPEED);
    } else {
      this.schedule(() => this.tick(wordIndex + 1, 0, false), PAUSE_TIME);
    }
  }

  private schedule(callback: () => void, delay: number): void {
    this.timer = setTimeout(callback, delay);
  }
}
