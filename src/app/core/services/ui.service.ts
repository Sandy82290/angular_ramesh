import { Injectable, signal } from '@angular/core';

/** Lightweight shared UI state (e.g. the quick-booking popup). */
@Injectable({ providedIn: 'root' })
export class UiService {
  readonly quickBookingOpen = signal(false);

  openQuickBooking(): void {
    this.quickBookingOpen.set(true);
  }
  closeQuickBooking(): void {
    this.quickBookingOpen.set(false);
  }
}
