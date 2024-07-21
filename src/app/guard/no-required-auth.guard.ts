import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (authService.isAuthenticated()) {
    return false;
  }

  return true;
};
