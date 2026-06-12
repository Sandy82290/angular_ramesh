import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { BookingFormComponent } from '../../shared/components/booking-form/booking-form.component';
import { SeoService } from '../../core/services/seo.service';
import { BUSINESS, CALL_LINK, WHATSAPP_LINK } from '../../core/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, PageHeroComponent, RevealDirective, BookingFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  readonly business = BUSINESS;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;
  readonly mapUrl: SafeResourceUrl;

  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  constructor() {
    const q = encodeURIComponent('South Delhi, Delhi 110025');
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${q}&z=13&output=embed`
    );
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact Us',
      description:
        'Contact RK Repairing for same-day appliance repair in South Delhi. Call 82290 39946, WhatsApp us, or fill the booking form. Address: South Delhi, Delhi 110025.',
      keywords: 'contact RK Repairing, appliance repair phone number South Delhi, book repair',
      path: '/contact',
    });
  }
}
