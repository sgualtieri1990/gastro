import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollNavService } from '../../services/scroll-nav.service';

@Component({
  selector: 'app-scroll-redirect',
  template: '',
})
export class ScrollRedirect implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly scrollNav = inject(ScrollNavService);

  ngOnInit(): void {
    const fragment = this.route.snapshot.data['fragment'] as string;
    const scrollBlock = (this.route.snapshot.data['scrollBlock'] as ScrollLogicalPosition | undefined) ?? 'start';
    this.scrollNav.goHomeAndScroll(fragment, scrollBlock);
  }
}
