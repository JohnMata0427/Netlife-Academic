import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const requiredCodeGuard: CanActivateFn = () => {
  if (!localStorage.getItem('email'))
    return inject(Router).createUrlTree(['/auth/recovery-password']);

  return true;
};
