import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../directives/reveal.directive';
import { TESTIMONIALS } from '../../../core/site.config';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatIconModule, RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly testimonials = TESTIMONIALS;
  readonly active = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => this.next(), 5500);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  go(i: number): void {
    this.active.set(i);
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.testimonials.length);
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  stars(n: number): number[] {
    return Array.from({ length: n });
  }
}
