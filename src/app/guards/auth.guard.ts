import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/** Lässt nur angemeldete Kunden durch, alle anderen landen auf der Anmeldeseite. */
export const authGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  await auth.ensureLoaded();
  return auth.loggedIn() ? true : router.createUrlTree(['/anmelden']);
};
