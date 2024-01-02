import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { Users } from 'src/app/home/Users';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from 'src/app/shared/store/employee/employees.model';

interface Data {
  id: number;
  firstName: string;
}
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})


export class HomeAdminComponent {
  
  id: number;
  userName: string
  userLoggedIn: any;
  users: EmployeeModel[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _users: UsersService,
    private _auth: AuthService,
    private _employee : EmployeesService
  ) { }

  ngOnInit(): void {
    this.getEmpApi();
    
    this.userLoggedIn = this._auth.getUser();
    this.userName = this.userLoggedIn.firstName;

  }

  getEmpApi() {
    this._employee.getEmployeeDetails()
      .subscribe((data) => {
        // console.log(data);
        this.users = data;
      })
  }



  onSelect(user: Data) {
    this.router.navigate(['/home/'+this.userLoggedIn.id+'/'+this.userLoggedIn.firstName+'/user', user.id, user.firstName], {
      queryParams: { page: user.id, search: user.firstName }
    });
  }
  
}
