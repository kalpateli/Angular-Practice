import { Component, OnInit } from '@angular/core';
import { AttendenceService } from './shared/services/attendence.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  title = 'angularPractise';
  userLoggedIn = JSON.parse(localStorage.getItem('userData'));

  constructor(private attendance : AttendenceService,
    private auth : AuthService){
      this.auth.setMarkedIn("false");
      this.auth.setMarkedOut("true");
      // auth.removemarked()
  }

  ngOnInit() : void {
    this.attendance.createAttendanceRecord();
  }

}
