import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-quick-booking',
  standalone: true,
  imports: [MatIconModule, BookingFormComponent],
  templateUrl: './quick-booking.component.html',
  styleUrl: './quick-booking.component.scss',
})
export class QuickBookingComponent implements OnInit {
  readonly ui = inject(UiService);

  ngOnInit(): void {
    // Auto-open once per browser session to nudge a booking.
    try {
      if (!sessionStorage.getItem('rk_qb_shown')) {
        setTimeout(() => {
          this.ui.openQuickBooking();
          sessionStorage.setItem('rk_qb_shown', '1');
        }, 9000);
      }
    } catch {
      /* sessionStorage may be unavailable; ignore */
    }
  }

  close(): void {
    this.ui.closeQuickBooking();
  }
}
