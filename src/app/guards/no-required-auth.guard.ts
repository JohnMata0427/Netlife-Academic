import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const noAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) return false;

  if (authService.getInfoUser().role !== 'ADMIN')
    return router.createUrlTree(['/home']);
  else return router.createUrlTree(['/admin/dashboard']);
};
