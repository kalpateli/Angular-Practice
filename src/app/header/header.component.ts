import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  currUser : any
  ngOnInit() {
  }
  
  constructor(private route: Router , private _auth : AuthService) {
    this.currUser = this._auth.getUser();

  }



  loggedIn() {
    return this._auth.getIsLoggedIn() ;
  }

  onProfile() {
    this.route.navigate(['/auth/profile'])
  }

  onLogOut() {
    this._auth.logOut();
  }

  clickHome() {
    if (!this.currUser) {
      this.route.navigate(['/home'])
    }
    else {
      this.route.navigate(['/home', this.currUser.id, this.currUser.firstName],
        { queryParams: { userId: this.currUser.id, userName: this.currUser.firstName } })
    }


  }

}
