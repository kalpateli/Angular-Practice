import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export const module2GuardGuard: CanActivateFn = (route, state) => {
  
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  if(isLoggedIn == "false")
  {
    alert("not authenticated user")
    return false;
  }
  else
  {
    return true;
  }
  
};

