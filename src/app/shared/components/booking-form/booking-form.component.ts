import { Component, inject, Input, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { APPLIANCE_OPTIONS, bookingWhatsappLink } from '../../../core/site.config';

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

    const { name, phone, appliance, message } = this.form.getRawValue();
    const link = bookingWhatsappLink({ name, phone, appliance, message });

    // Open WhatsApp with the booking details pre-filled, addressed to the business.
    window.open(link, '_blank', 'noopener');

    this.successMsg.set(
      `Thank you ${name}! WhatsApp is opening with your booking details — just tap send and we'll confirm your slot.`
    );
    this.form.reset({ name: '', phone: '', appliance: '', message: '' });
  }
}
