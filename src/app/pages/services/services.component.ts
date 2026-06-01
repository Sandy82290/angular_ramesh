import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { BookingFormComponent } from '../../shared/components/booking-form/booking-form.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { SeoService } from '../../core/services/seo.service';
import { CALL_LINK, SERVICES, WHATSAPP_LINK } from '../../core/site.config';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatIconModule,
    PageHeroComponent,
    RevealDirective,
    BookingFormComponent,
    CtaBannerComponent,
    FaqComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  readonly services = SERVICES;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Appliance Repair Services',
      description:
        'Detailed washing machine, refrigerator, microwave & deep freezer repair services in South Delhi. All brands — LG, Samsung, IFB, Whirlpool, Bosch. Book online or call 70658 89289.',
      keywords:
        'washing machine repair, refrigerator repair, microwave repair, deep freezer repair, LG Samsung IFB Whirlpool Bosch service',
      path: '/services',
    });
  }
}
