import { Component, HostListener, inject } from '@angular/core';
import { CONTACT } from '../../data/site-content';
import { WhatsappChooserService } from '../../services/whatsapp-chooser.service';

@Component({
  selector: 'app-whatsapp-chooser',
  templateUrl: './whatsapp-chooser.html',
  styleUrl: './whatsapp-chooser.css',
})
export class WhatsappChooser {
  readonly chooser = inject(WhatsappChooserService);
  readonly phone = CONTACT.phone;
  readonly phoneHref = CONTACT.phoneHref;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.chooser.close();
  }
}
