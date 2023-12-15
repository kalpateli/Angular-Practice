import { CanMatchFn } from '@angular/router';

export const authLoadGuard: CanMatchFn = (route, segments) => {
  
  // let role = JSON.parse(localStorage.getItem('isLoggedIn'));
  let role = (localStorage.getItem('userType'));

  console.log(role);
  if(!role || role == 'employee')
  {
    console.log("role false" );
    return false;
  }
  else
  {
    console.log("role true");
    return true;
  }

};
