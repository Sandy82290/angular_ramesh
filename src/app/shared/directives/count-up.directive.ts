import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  NgZone,
  OnDestroy,
} from '@angular/core';

/**
 * Animates a number from 0 up to [countUp] when scrolled into view.
 * Usage: <span [countUp]="5000" [countSuffix]="'+'"></span>
 */
@Directive({
  selector: '[countUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('countUp') target = 0;
  @Input() countSuffix = '';
  @Input() countDuration = 1800;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private rafId?: number;
  private done = false;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    node.textContent = `0${this.countSuffix}`;

    if (!('IntersectionObserver' in window)) {
      this.render(this.target);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.done) {
            this.done = true;
            this.animate();
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(node);
  }

  private animate(): void {
    this.zone.runOutsideAngular(() => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / this.countDuration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        this.render(Math.round(eased * this.target));
        if (progress < 1) {
          this.rafId = requestAnimationFrame(step);
        }
      };
      this.rafId = requestAnimationFrame(step);
    });
  }

  private render(value: number): void {
    this.el.nativeElement.textContent = `${value.toLocaleString('en-IN')}${this.countSuffix}`;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
