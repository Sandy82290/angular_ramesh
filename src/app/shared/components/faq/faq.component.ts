import { Component, inject, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { FAQS } from '../../../core/site.config';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  readonly faqs = FAQS;
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    // FAQPage structured data for rich results
    this.seo.setJsonLd('faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }
}
