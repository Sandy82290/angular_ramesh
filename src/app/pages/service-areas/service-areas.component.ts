import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { SeoService } from '../../core/services/seo.service';
import { CALL_LINK, SERVICE_AREAS, WHATSAPP_LINK } from '../../core/site.config';

@Component({
  selector: 'app-service-areas',
  standalone: true,
  imports: [MatIconModule, PageHeroComponent, RevealDirective, CtaBannerComponent],
  templateUrl: './service-areas.component.html',
  styleUrl: './service-areas.component.scss',
})
export class ServiceAreasComponent implements OnInit {
  readonly areas = SERVICE_AREAS;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;
  readonly mapUrl: SafeResourceUrl;

  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  constructor() {
    const q = encodeURIComponent('South Delhi, Delhi 110025');
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${q}&z=12&output=embed`
    );
  }

  ngOnInit(): void {
    this.seo.update({
      title: 'Service Areas in South Delhi',
      description:
        'RK Repairing serves Saket, Malviya Nagar, Kalkaji, Govindpuri, Hauz Khas, Chhatarpur, Greater Kailash, Nehru Place & Lajpat Nagar with same-day appliance repair.',
      keywords:
        'appliance repair Saket, Malviya Nagar, Kalkaji, Hauz Khas, Greater Kailash, Nehru Place, Lajpat Nagar',
      path: '/service-areas',
    });
  }
}
