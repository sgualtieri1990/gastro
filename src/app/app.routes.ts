import { Routes } from '@angular/router';
import { PageLayout } from './layout/page-layout';

export const routes: Routes = [
  {
    path: '',
    component: PageLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      {
        path: 'gastrogeraete',
        loadComponent: () => import('./pages/gastrogeraete/gastrogeraete').then(m => m.Gastrogeraete),
      },
      {
        path: 'ueber-uns',
        loadComponent: () => import('./pages/about/about').then(m => m.About),
      },
      {
        path: 'produkte',
        loadComponent: () => import('./pages/products/products').then(m => m.Products),
      },
      {
        path: 'la-perfetta',
        loadComponent: () => import('./pages/la-perfetta/la-perfetta').then(m => m.LaPerfetta),
      },
      {
        path: 'termin',
        loadComponent: () => import('./pages/termin/termin').then(m => m.Termin),
      },
      {
        path: 'kunde-werden',
        loadComponent: () => import('./pages/kunde-werden/kunde-werden').then(m => m.KundeWerden),
      },
      {
        path: 'karriere',
        loadComponent: () => import('./pages/karriere/karriere').then(m => m.Karriere),
      },
      {
        path: 'tdb',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Technische Datenblätter (TDB) erhalten' },
      },
      {
        path: 'datenschutz',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Datenschutzerklärung' },
      },
      {
        path: 'barrierefreiheit',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Barrierefreiheitserklärung' },
      },
      {
        path: 'versand',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Versandrichtlinie' },
      },
      {
        path: 'agb',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Allgemeine Geschäftsbedingungen' },
      },
      {
        path: 'rueckerstattung',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Rückerstattungsrichtlinie' },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
