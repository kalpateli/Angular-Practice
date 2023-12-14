import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private router : Router
  ) { }


  setIsLoggedIn()
  {
    localStorage.setItem('isLoggedIn', 'true');
  }

  getIsLoggedIn()
  {
    return localStorage.getItem('isLoggedIn');

  }

  logOut()
  {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    this.router.navigate(['/auth/log-in']);
    
  }

  logIn()
  {}

  setUser(user : string)
  {
    localStorage.setItem('userData', user);

  }

  getUser( )
  {
    return JSON.parse(localStorage.getItem('userData'));
  }

  removeUser()
  {
    localStorage.removeItem('userData');

  }

  setUserType(userType : string)
  {
    localStorage.setItem('userType', userType);
  }


  getUserType()
  {
    return localStorage.getItem('userType');
  }
  



}
