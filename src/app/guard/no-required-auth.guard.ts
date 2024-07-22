import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)

  if (authService.isAuthenticated()) {
    router.navigate(['/home']);
    return false;
  }

  return true;
};
