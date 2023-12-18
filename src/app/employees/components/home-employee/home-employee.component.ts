import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss']
})


export class HomeEmployeeComponent {

   
  userName : string
  userLoggedIn : any;

  constructor(
    private route:ActivatedRoute, 
    private _auth: AuthService
    ){}
    
    ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        // this.userId= parseInt(params.get('id'));
        this.userName= params.get('name');
        console.log("userName"+this.userName);
      }
    );
    this.userLoggedIn = this._auth.getUser();

  }


  

 
}
