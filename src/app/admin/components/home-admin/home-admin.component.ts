import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EmployeeModel } from 'src/app/shared/store/employee/employees.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { loadEmployee } from 'src/app/shared/store/employee/employees.actions';
import { getEmployee } from 'src/app/shared/store/employee/employees.selectors';

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
    private _auth: AuthService,
    private store: Store<AppStateModel>
  ) { }

  ngOnInit(): void {
    this.getEmpApi();

    this.userLoggedIn = this._auth.getUser();
    this.userName = this.userLoggedIn.firstName;

  }

  getEmpApi() {

    this.store.dispatch(loadEmployee());
    this.store.select(getEmployee).subscribe
      ((item: EmployeeModel[]) => {
        this.users = item;

      })

    // this._employee.getEmployeeDetails()
    //   .subscribe((data) => {
    //     // console.log(data);
    //     this.users = data;
    //   })
  }



  onSelect(user: Data) {
    this.router.navigate(['/home/user', user.id, user.firstName], {
      queryParams: { page: user.id, search: user.firstName }
    });
  }

}
