import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LogOutDialogue } from '../../DialogueBox/logout-dialogue';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  currUser : any
  ngOnInit() {
  }
  
  constructor(
    private route: Router , 
    private _auth : AuthService,
    public dialog: MatDialog,
    ) {
    this.currUser = this._auth.getUser();

  }



  loggedIn() {
    return this._auth.getIsLoggedIn() ;
  }

  onProfile() {
    this.route.navigate(['/auth/profile'])
  }

  onLogOut() {
    // this._auth.logOut();
    this.dialog.open(LogOutDialogue, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      if (result) {
      this._auth.logOut();
       

        console.log('User clicked "Ok"');
        
      } else {
        console.log('clicked cancel');
      }
    });
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
