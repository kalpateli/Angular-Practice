import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  currUser = JSON.parse(localStorage.getItem('userData'));
  ngOnInit() {
  }

  constructor(private route: Router) {
  }



  loggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  onProfile() {
    this.currUser = JSON.parse(localStorage.getItem('userData'));
    this.route.navigate(['/auth/profile', this.currUser.id, this.currUser.userName])
  }

  onLogOut() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userData',)
    this.route.navigate(['/auth/log-in']);
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
