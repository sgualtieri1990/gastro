import { AfterViewInit, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { NETWORK_CITIES, NETWORK_HUB } from '../../data/site-content';

interface Point {
  x: number;
  y: number;
}

/** Vereinfachte Landesgrenze Deutschlands (Längengrad, Breitengrad) */
const OUTLINE: [number, number][] = [
  [7.2, 53.25], [7.2, 53.7], [8.0, 53.7], [8.6, 53.9], [8.9, 54.05], [8.6, 54.4], [8.9, 54.9],
  [9.6, 54.85], [10.1, 54.4], [11.1, 54.45], [10.9, 53.95], [11.5, 54.05], [12.1, 54.18],
  [12.8, 54.45], [13.4, 54.6], [13.8, 54.15], [14.2, 53.9], [14.4, 53.3], [14.15, 52.85],
  [14.6, 52.6], [14.75, 52.05], [14.6, 51.6], [15.0, 51.1], [14.8, 50.85], [14.0, 50.8],
  [13.2, 50.5], [12.5, 50.3], [12.1, 50.3], [12.5, 49.9], [12.4, 49.75], [12.9, 49.35],
  [13.4, 48.95], [13.8, 48.75], [13.45, 48.55], [12.9, 48.2], [13.0, 47.75], [12.8, 47.6],
  [13.0, 47.5], [12.2, 47.7], [11.6, 47.55], [11.0, 47.4], [10.5, 47.55], [10.2, 47.3],
  [9.6, 47.55], [9.0, 47.65], [8.6, 47.8], [7.6, 47.6], [7.55, 48.1], [7.8, 48.6],
  [8.2, 48.98], [7.0, 49.15], [6.4, 49.45], [6.5, 49.8], [6.1, 50.15], [6.4, 50.35],
  [6.0, 50.75], [6.1, 51.15], [6.2, 51.5], [5.95, 51.75], [6.8, 51.95], [6.75, 52.1],
  [7.05, 52.25], [6.7, 52.65], [7.05, 52.85],
];

const project = (lon: number, lat: number): Point => ({
  x: Math.round((lon - 5.6) * 50 * 10) / 10,
  y: Math.round((55.1 - lat) * 80 * 10) / 10,
});

@Component({
  selector: 'app-germany-network',
  templateUrl: './germany-network.html',
  styleUrl: './germany-network.css',
})
export class GermanyNetwork implements AfterViewInit {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = signal(false);
  readonly hub = { name: NETWORK_HUB.name, ...project(NETWORK_HUB.lon, NETWORK_HUB.lat) };

  readonly outline =
    OUTLINE.map(([lon, lat], i) => {
      const p = project(lon, lat);
      return `${i === 0 ? 'M' : 'L'}${p.x} ${p.y}`;
    }).join(' ') + ' Z';

  readonly cities = NETWORK_CITIES.map((city) => {
    const p = project(city.lon, city.lat);
    const mx = (this.hub.x + p.x) / 2;
    const my = (this.hub.y + p.y) / 2;
    const dx = p.x - this.hub.x;
    const dy = p.y - this.hub.y;
    const bend = 0.22;
    const cx = mx - dy * bend;
    const cy = my + dx * bend;
    return {
      name: city.name,
      ...p,
      route: `M${this.hub.x} ${this.hub.y} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${p.x} ${p.y}`,
      labelLeft: p.x < this.hub.x + 20,
    };
  });

  readonly dots = this.buildDots();

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible.set(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(this.host.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private buildDots(): Point[] {
    const polygon = OUTLINE.map(([lon, lat]) => project(lon, lat));
    const dots: Point[] = [];
    const step = 14;
    for (let y = 0; y <= 620; y += step) {
      for (let x = 0; x <= 480; x += step) {
        if (this.inside({ x, y }, polygon)) {
          dots.push({ x, y });
        }
      }
    }
    return dots;
  }

  private inside(point: Point, polygon: Point[]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const a = polygon[i];
      const b = polygon[j];
      if (a.y > point.y !== b.y > point.y && point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x) {
        inside = !inside;
      }
    }
    return inside;
  }
}
