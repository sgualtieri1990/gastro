import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { PageLayout } from './layout/page-layout';

export const routes: Routes = [
  {
    path: '',
    component: PageLayout,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      {
        path: 'produkte',
        loadComponent: () => import('./pages/scroll-redirect/scroll-redirect').then(m => m.ScrollRedirect),
        data: { fragment: 'sortiment' },
      },
      {
        path: 'ueber-uns',
        loadComponent: () => import('./pages/scroll-redirect/scroll-redirect').then(m => m.ScrollRedirect),
        data: { fragment: 'geschaeftsfuehrer', scrollBlock: 'start' },
      },
      {
        path: 'gastrogeraete',
        loadComponent: () => import('./pages/gastrogeraete/gastrogeraete').then(m => m.Gastrogeraete),
      },
      {
        path: 'termin',
        loadComponent: () => import('./pages/termin/termin').then(m => m.Termin),
      },
      {
        path: 'kunde-werden',
        loadComponent: () => import('./pages/scroll-redirect/scroll-redirect').then(m => m.ScrollRedirect),
        data: { fragment: 'b2b-katalog' },
      },
      {
        path: 'anmelden',
        loadComponent: () => import('./pages/konto/konto').then(m => m.Konto),
        data: { mode: 'login' },
      },
      {
        path: 'passwort-vergessen',
        loadComponent: () => import('./pages/konto/konto').then(m => m.Konto),
        data: { mode: 'forgot' },
      },
      {
        path: 'passwort-zuruecksetzen',
        loadComponent: () => import('./pages/konto/konto').then(m => m.Konto),
        data: { mode: 'reset' },
      },
      {
        path: 'kundenbereich',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/kundenbereich/kundenbereich').then(m => m.Kundenbereich),
      },
      {
        path: 'karriere',
        loadComponent: () => import('./pages/karriere/karriere').then(m => m.Karriere),
      },
      {
        path: 'produktportfolio',
        loadComponent: () => import('./pages/produktportfolio/produktportfolio').then(m => m.Produktportfolio),
      },
      {
        path: 'tdb',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Technische Datenblätter (TDB) erhalten', doc: 'tdb' },
      },
      {
        path: 'datenschutz',
        loadComponent: () => import('./pages/legal/legal').then(m => m.Legal),
        data: { title: 'Datenschutzerklärung', doc: 'datenschutz' },
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
        data: { title: 'Allgemeine Geschäftsbedingungen', doc: 'agb' },
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
