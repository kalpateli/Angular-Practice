import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss']
})


export class HomeEmployeeComponent {

  id: number;
  userName: string
  userLoggedIn: any;

  constructor(
    private route: ActivatedRoute,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {


    this.userLoggedIn = this._auth.getUser();
    this.userName = this.userLoggedIn.firstName;

  }





}
