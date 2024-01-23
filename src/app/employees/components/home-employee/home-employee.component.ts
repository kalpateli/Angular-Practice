import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkingComponent } from 'src/app/shared/DialogueBox/marking/marking.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
// import video from "src/assets/videos/company.mp4"
@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss']
})


export class HomeEmployeeComponent {

  id: number;
  userName: string
  userLoggedIn: any;
  videoUrl : string = "../../assets/videos/company.mp4";

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _auth: AuthService
  ) {

  }

  ngOnInit(): void {


    this.userLoggedIn = this._auth.getUser();
    this.userName = this.userLoggedIn.firstName;

  }


  openDialog() {
    this.dialog.open(MarkingComponent, {
      width: '450px',
    }).afterClosed().subscribe(result => {
      if (result) {



      } else {
        console.log('clicked cancel');
      }
    });
  }


}
