import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BUSINESS, CALL_LINK, WHATSAPP_LINK } from '../../../core/site.config';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="cta">
      <div class="container cta__inner">
        <div class="cta__text">
          <h2>{{ heading }}</h2>
          <p>{{ subheading }}</p>
        </div>
        <div class="cta__actions">
          <a [href]="callLink" class="btn btn-rk-primary btn-lg-rk">
            <mat-icon>call</mat-icon> Call {{ business.phoneDisplay }}
          </a>
          <a [href]="whatsappLink" target="_blank" rel="noopener" class="btn btn-rk-whatsapp btn-lg-rk">
            <mat-icon>chat</mat-icon> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta {
        background: linear-gradient(135deg, var(--rk-yellow), #ffd454);
        padding: clamp(2.5rem, 5vw, 4rem) 0;
      }
      .cta__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.6rem;
        flex-wrap: wrap;
      }
      .cta__text h2 {
        font-size: clamp(1.5rem, 3vw, 2.3rem);
        margin: 0 0 0.4rem;
        color: #222;
      }
      .cta__text p { margin: 0; color: #4a3d12; font-size: 1.05rem; }
      .cta__actions { display: flex; gap: 0.9rem; flex-wrap: wrap; }
      @media (max-width: 767.98px) {
        .cta__inner { flex-direction: column; text-align: center; }
        .cta__actions { justify-content: center; width: 100%; }
        .cta__actions .btn { flex: 1 1 auto; justify-content: center; }
      }
    `,
  ],
})
export class CtaBannerComponent {
  @Input() heading = 'Need Immediate Appliance Repair?';
  @Input() subheading = 'Our expert technicians are ready for same-day doorstep service across South Delhi.';

  readonly business = BUSINESS;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;
}
