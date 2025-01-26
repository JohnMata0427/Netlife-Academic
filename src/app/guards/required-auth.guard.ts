import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@/services/auth.service';

export const authGuard: CanActivateFn = () => {
  if (!inject(AuthService).isAuthenticated())
    return inject(Router).createUrlTree(['/auth/login']);

  return true;
};
