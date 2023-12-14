import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  currUser = JSON.parse(localStorage.getItem('userData'));
  ngOnInit() {
  }

  constructor(private route: Router , private _auth : AuthService) {
  }



  loggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  onProfile() {
    this.currUser = JSON.parse(localStorage.getItem('userData'));
    this.route.navigate(['/auth/profile', this.currUser.id, this.currUser.userName])
  }

  onLogOut() {
    this._auth.logOut();
  }

  clickHome() {
    this.currUser = JSON.parse(localStorage.getItem('userData'));
    if (!this.currUser) {
      this.route.navigate(['/home'])
    }
    else {
      this.route.navigate(['/home', this.currUser.id, this.currUser.firstName],
        { queryParams: { userId: this.currUser.id, userName: this.currUser.firstName } })
    }


  }

}
