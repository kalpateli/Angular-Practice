import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private cookie : CookieService
  ) { }


  setMarkedIn(action : string)
  {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getTime() + 2*60*1000); 

    this.cookie.set('markedin', action , expirationDate, '/');
    // localStorage.setItem('markedin',action);
  }

  setMarkedOut(action : string)
  {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getTime() + 2*60*1000);
    this.cookie.set('markedout', action , expirationDate , '/');
    // localStorage.setItem('markedout',action);
  }

  getmarkedin()
  {
    return this.cookie.get('markedin');
    // return localStorage.getItem('markedin')
  }

  getmarkedout()
  {

    return this.cookie.get('markedout');

    // return localStorage.getItem('markedout');
  }

  removemarked()
  {
    this.cookie.delete('markedout');
    this.cookie.delete('markedin');
    // localStorage.removeItem('markedin');
    // localStorage.removeItem('markedout');
  }


  setIsLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
    // sessionStorage.setItem('isLoggedIn', 'true');

    // this.cookie.set('isLoggedIn', 'true');
    // this.cookie.get('isLoggedIn');
    // this.cookie.delete('isLoggedIn');
    // this.cookie.check('isLoggedIn');
    // this.cookie.getAll();
    // this.cookie.deleteALl();
  }

  getIsLoggedIn() {
    return localStorage.getItem('isLoggedIn');
    // return sessionStorage.getItem('isLoggedIn');
  }

  logOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('userType');
    this.router.navigate(['/auth/log-in']);

  }

  logIn() { }

  setUser(user: string) {
    localStorage.setItem('userData', user);

  }

  getUser() {
    return JSON.parse(localStorage.getItem('userData'));
  }

  removeUser() {
    localStorage.removeItem('userData');
  }

  setUserType(userType: string) {
    localStorage.setItem('userType', userType);
  }

  getUserType() {
    return localStorage.getItem('userType');
  }




}
