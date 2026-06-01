import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (loading$ | async) {
      <div class="rk-loader" role="status" aria-label="Loading">
        <div class="rk-loader__bar"></div>
      </div>
    }
  `,
  styles: [
    `
      .rk-loader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        z-index: 2000;
        background: rgba(13, 71, 161, 0.12);
        overflow: hidden;
      }
      .rk-loader__bar {
        height: 100%;
        width: 40%;
        background: linear-gradient(90deg, #0d47a1, #ffc107);
        animation: rk-loader-move 1s infinite ease-in-out;
      }
      @keyframes rk-loader-move {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(320%); }
      }
    `,
  ],
})
export class LoaderComponent {
  private readonly router = inject(Router);

  readonly loading$: Observable<boolean> = this.router.events.pipe(
    filter(
      (e: RouterEvent) =>
        e instanceof NavigationStart ||
        e instanceof NavigationEnd ||
        e instanceof NavigationCancel ||
        e instanceof NavigationError
    ),
    map((e) => e instanceof NavigationStart),
    startWith(false)
  );
}
