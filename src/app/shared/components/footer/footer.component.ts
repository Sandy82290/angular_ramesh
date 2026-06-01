import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  BUSINESS,
  CALL_LINK,
  SERVICES,
  SERVICE_AREAS,
  WHATSAPP_LINK,
} from '../../../core/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly business = BUSINESS;
  readonly callLink = CALL_LINK;
  readonly whatsappLink = WHATSAPP_LINK;
  readonly services = SERVICES.slice(0, 6);
  readonly areas = SERVICE_AREAS;
  readonly year = 2026;
}
