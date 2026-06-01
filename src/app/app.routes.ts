import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Home',
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services',
    data: { breadcrumb: 'Services' },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us',
    data: { breadcrumb: 'About Us' },
  },
  {
    path: 'service-areas',
    loadComponent: () =>
      import('./pages/service-areas/service-areas.component').then(
        (m) => m.ServiceAreasComponent
      ),
    title: 'Service Areas',
    data: { breadcrumb: 'Service Areas' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact',
    data: { breadcrumb: 'Contact' },
  },
  { path: '**', redirectTo: '' },
];
