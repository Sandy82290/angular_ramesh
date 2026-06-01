import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { BookingFormComponent } from '../../shared/components/booking-form/booking-form.component';
import { SeoService } from '../../core/services/seo.service';
import {
  BUSINESS,
  CALL_LINK,
  PROCESS,
  SERVICES,
  STATS,
  WHATSAPP_LINK,
  WHY_CHOOSE,
} from '../../core/site.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    RevealDirective,
    TestimonialsComponent,
    FaqComponent,
    CtaBannerComponent,
    BookingFormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  readonly business = BUSINESS;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;
  readonly services = SERVICES.slice(0, 5);
  readonly whyChoose = WHY_CHOOSE;
  readonly process = PROCESS;
  readonly stats = STATS;

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Expert Appliance Repair Services at Your Doorstep',
      description:
        'RK Repairing offers same-day washing machine, refrigerator, fridge, deep freezer & microwave repair across South Delhi. All brands, doorstep service, genuine spare parts. Call 70658 89289.',
      keywords:
        'appliance repair South Delhi, washing machine repair, refrigerator repair, microwave repair, same day service',
      path: '/',
    });

    this.seo.setJsonLd('service-schema', {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Home Appliance Repair',
      provider: { '@type': 'LocalBusiness', name: BUSINESS.name, telephone: BUSINESS.phoneRaw },
      areaServed: { '@type': 'Place', name: 'South Delhi, Delhi' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Appliance Repair Services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title },
        })),
      },
    });
  }
}
