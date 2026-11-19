import { Component, ElementRef, HostListener, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-wine-select',
  templateUrl: './wine-select.html',
  styleUrl: './wine-select.css',
})
export class WineSelect {
  readonly options = input.required<readonly string[]>();
  readonly placeholder = input('Bitte wählen');
  readonly value = model('');
  readonly open = signal(false);
  readonly activeIndex = signal(0);

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  toggle(): void {
    if (this.open()) {
      this.close();
      return;
    }
    const selected = this.options().indexOf(this.value());
    this.activeIndex.set(selected >= 0 ? selected : 0);
    this.open.set(true);
  }

  choose(option: string): void {
    this.value.set(option);
    this.close();
  }

  onKeydown(event: KeyboardEvent): void {
    const options = this.options();
    if (!options.length) {
      return;
    }

    if (!this.open()) {
      if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.toggle();
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      this.activeIndex.set((this.activeIndex() + direction + options.length) % options.length);
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.choose(options[this.activeIndex()]);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  private close(): void {
    this.open.set(false);
  }
}
