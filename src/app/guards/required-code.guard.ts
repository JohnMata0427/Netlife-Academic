import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const requiredCodeGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (!localStorage.getItem('email')) return router.createUrlTree(['/auth/recovery-password']);

  return true;
};
