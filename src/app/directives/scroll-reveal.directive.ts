import { AfterViewInit, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly revealDelay = input(0, { alias: 'appScrollRevealDelay' });

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const delay = this.revealDelay();

    element.classList.add('scroll-reveal');
    if (delay > 0) {
      element.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(element);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
