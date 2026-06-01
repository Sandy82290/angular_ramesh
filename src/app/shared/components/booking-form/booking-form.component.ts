import { Component, inject, Input, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { APPLIANCE_OPTIONS } from '../../../core/site.config';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss',
})
export class BookingFormComponent {
  /** Show the long-form message field (used on Contact page). */
  @Input() showMessage = true;
  @Input() compact = false;

  private readonly fb = inject(FormBuilder);
  private readonly bookingService = inject(BookingService);

  readonly appliances = APPLIANCE_OPTIONS;
  readonly submitting = signal(false);
  readonly successMsg = signal<string | null>(null);
  readonly errorMsg = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    appliance: ['', [Validators.required]],
    message: [''],
  });

  submit(): void {
    this.successMsg.set(null);
    this.errorMsg.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const { name, phone, appliance, message } = this.form.getRawValue();

    this.bookingService
      .submitBooking({ name, phone, appliance, message })
      .subscribe({
        next: (res) => {
          this.submitting.set(false);
          this.successMsg.set(res.message);
          this.form.reset({ name: '', phone: '', appliance: '', message: '' });
        },
        error: () => {
          this.submitting.set(false);
          this.errorMsg.set('Something went wrong. Please call us at 70658 89289.');
        },
      });
  }
}
