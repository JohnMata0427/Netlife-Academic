import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const requiredCodeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (!localStorage.getItem('email')) {
    router.navigate(['/auth/recover-password']);
    return false;
  }

  return true;
};
