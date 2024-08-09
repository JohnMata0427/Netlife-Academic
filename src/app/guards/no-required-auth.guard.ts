import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) return true;

  if (authService.getInfoUser().role !== 'ADMIN') return router.createUrlTree(['/home']);
  else return router.createUrlTree(['/admin/dashboard']);
};
