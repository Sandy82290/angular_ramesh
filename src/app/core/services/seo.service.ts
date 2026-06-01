import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { BUSINESS } from '../site.config';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly origin = 'https://www.rkrepairing.in';

  update(data: SeoData): void {
    const fullTitle = `${data.title} | ${BUSINESS.name}`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: this.origin + (data.path ?? '') });
    this.meta.updateTag({ property: 'og:site_name', content: BUSINESS.name });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    this.setCanonical(this.origin + (data.path ?? ''));
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Inject a JSON-LD structured-data block, replacing any with the same id. */
  setJsonLd(id: string, schema: Record<string, unknown>): void {
    const existing = this.doc.getElementById(id);
    if (existing) {
      existing.remove();
    }
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    this.doc.head.appendChild(script);
  }
}
