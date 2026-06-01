import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

export interface BookingRequest {
  name: string;
  phone: string;
  appliance: string;
  message?: string;
}

export interface BookingResponse {
  success: boolean;
  reference: string;
  message: string;
}

/**
 * Dummy API integration. Simulates a network round-trip so the UI can show
 * loading / success / error states. Swap `submitBooking` for a real HttpClient
 * call to a backend endpoint when one is available.
 */
@Injectable({ providedIn: 'root' })
export class BookingService {
  private counter = 1042;

  submitBooking(request: BookingRequest): Observable<BookingResponse> {
    return of(request).pipe(
      delay(1200),
      mergeMap((req) => {
        if (!req.name || !req.phone) {
          return throwError(() => new Error('Name and phone are required.'));
        }
        const reference = `RK-${this.counter++}`;
        return of<BookingResponse>({
          success: true,
          reference,
          message: `Thank you ${req.name}! Your booking ${reference} is confirmed. Our technician will call you shortly.`,
        });
      })
    );
  }
}
