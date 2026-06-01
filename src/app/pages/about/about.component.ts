import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { SeoService } from '../../core/services/seo.service';
import { STATS, WHY_CHOOSE } from '../../core/site.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIconModule,
    PageHeroComponent,
    RevealDirective,
    CountUpDirective,
    TestimonialsComponent,
    CtaBannerComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  readonly stats = STATS;
  readonly values = WHY_CHOOSE;

  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'About Us',
      description:
        'RK Repairing is South Delhi\'s trusted home appliance repair company with 10+ years of experience, 5000+ repairs completed and 2000+ happy customers. Meet our expert technician team.',
      keywords: 'about RK Repairing, appliance repair company South Delhi, expert technicians',
      path: '/about',
    });
  }
}
