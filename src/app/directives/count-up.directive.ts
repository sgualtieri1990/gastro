import { AfterViewInit, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective implements AfterViewInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly target = input.required<number>({ alias: 'appCountUp' });
  readonly duration = input(1800, { alias: 'appCountUpDuration' });
  readonly from = input<number | null>(null, { alias: 'appCountUpFrom' });

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const target = this.target();
    const start = this.from() ?? 0;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.textContent = this.format(target);
      return;
    }

    element.textContent = this.format(start);
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        observer.disconnect();
        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / this.duration(), 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          element.textContent = this.format(Math.round(start + (target - start) * eased));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    this.destroyRef.onDestroy(() => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    });
  }

  private format(value: number): string {
    return value >= 1900 && value <= 2100 ? String(value) : value.toLocaleString('de-DE');
  }
}
