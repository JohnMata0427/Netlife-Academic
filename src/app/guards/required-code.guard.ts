import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const requiredCodeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!localStorage.getItem('email')) return router.createUrlTree(['/auth/recover-password']);

  return true;
};
