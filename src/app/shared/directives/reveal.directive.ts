import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Adds a fade-up reveal animation when the element scrolls into view.
 * Usage: <div appReveal [revealDelay]="150">…</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement as HTMLElement;
    this.renderer.addClass(node, 'reveal');

    if (!('IntersectionObserver' in window)) {
      this.renderer.addClass(node, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(node, 'animation-delay', `${this.revealDelay}ms`);
            this.renderer.addClass(node, 'is-visible');
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0.12 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
