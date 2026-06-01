import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FloatingButtonsComponent } from './shared/components/floating-buttons/floating-buttons.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { QuickBookingComponent } from './shared/components/quick-booking/quick-booking.component';
import { SeoService } from './core/services/seo.service';
import { BUSINESS } from './core/site.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FloatingButtonsComponent,
    LoaderComponent,
    QuickBookingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    // Organization-level structured data, present on every page.
    this.seo.setJsonLd('org-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BUSINESS.name,
      slogan: BUSINESS.tagline,
      telephone: BUSINESS.phoneRaw,
      email: BUSINESS.email,
      areaServed: 'South Delhi, Delhi',
    });
  }
}
