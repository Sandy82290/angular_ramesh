import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <section class="page-hero">
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__inner">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a routerLink="/"><mat-icon>home</mat-icon> Home</a>
          <mat-icon class="crumbs__sep">chevron_right</mat-icon>
          <span aria-current="page">{{ title }}</span>
        </nav>
        <h1>{{ title }}</h1>
        @if (subtitle) {
          <p>{{ subtitle }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        position: relative;
        background: linear-gradient(120deg, var(--rk-blue-dark), var(--rk-blue) 60%, var(--rk-blue-light));
        color: #fff;
        padding: clamp(3rem, 7vw, 5.5rem) 0 clamp(2.5rem, 5vw, 3.5rem);
        overflow: hidden;
      }
      .page-hero__overlay {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle at 85% 20%, rgba(255, 193, 7, 0.25), transparent 45%);
        pointer-events: none;
      }
      .page-hero__inner { position: relative; z-index: 1; }
      .page-hero h1 {
        color: #fff;
        font-size: clamp(2rem, 4.5vw, 3rem);
        margin: 0.8rem 0 0.6rem;
      }
      .page-hero p {
        max-width: 640px;
        margin: 0;
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
      }
      .crumbs {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.9rem;
        font-weight: 500;
      }
      .crumbs a { color: var(--rk-yellow); display: inline-flex; align-items: center; gap: 0.3rem; }
      .crumbs a:hover { color: #fff; }
      .crumbs span { color: rgba(255, 255, 255, 0.85); }
      .crumbs mat-icon { font-size: 18px; width: 18px; height: 18px; }
      .crumbs__sep { color: rgba(255, 255, 255, 0.6); }
    `,
  ],
})
export class PageHeroComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}
