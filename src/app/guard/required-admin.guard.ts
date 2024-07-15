import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@netlifeacademic/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAdministrator()) {
    alert('No tienes permisos para acceder a esta sección');
    router.navigate(['/home']);
    return false;
  }

  return true;
};
