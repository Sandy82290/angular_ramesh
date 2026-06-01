import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BUSINESS, CALL_LINK, WHATSAPP_LINK } from '../../../core/site.config';
import { UiService } from '../../../core/services/ui.service';

@Component({
  selector: 'app-floating-buttons',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.scss',
})
export class FloatingButtonsComponent {
  readonly business = BUSINESS;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;
  readonly ui = inject(UiService);
}
