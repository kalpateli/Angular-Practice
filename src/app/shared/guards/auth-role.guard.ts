import { CanMatchFn } from '@angular/router';

export const authRoleGuard: CanMatchFn = (route, segments) => {
  
  let role = (localStorage.getItem('userType'));

  if(!role || role == 'employee')
  {
    return false;
  }
  else
  {
    return true;
  }

};
