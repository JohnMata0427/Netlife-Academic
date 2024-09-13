import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

export const adminGuard: CanActivateFn = () => {
  if (inject(AuthService).getInfoUser().role !== 'ADMIN')
    return inject(Router).createUrlTree(['/home']);
  
  else return true;
};
