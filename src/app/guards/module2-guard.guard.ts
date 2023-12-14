import { CanActivateFn} from '@angular/router';

export const module2GuardGuard: CanActivateFn = (route, state) => {
  
  let userType =(localStorage.getItem('userType'));
  let isLoggedIn =(localStorage.getItem('isLoggedIn'));

  if(userType == "admin" && isLoggedIn=="true")
  {
    return true;
  }
  else
  {
    alert("not authenticated user");
    return false;
  }
  
};

