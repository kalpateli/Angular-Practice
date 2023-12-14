import { Component } from '@angular/core';
import { Users } from './home/Users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPractise';
  userLoggedIn = JSON.parse(localStorage.getItem('userData'));


  constructor(
  ){
   
    // localStorage.setItem("isLoggedIn","false");
    localStorage.setItem("userType","employee");



  }
}
