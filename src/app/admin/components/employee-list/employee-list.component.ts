import { Component, OnInit, OnChanges } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { map } from 'rxjs';
import { EditEmployeeDialogue } from 'src/app/shared/DialogueBox/edit-employee-dialogue/edit-employee-dialogue';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogue } from 'src/app/shared/DialogueBox/add-employee-dialogue/add-employee-dialogue';
import { UsersService } from 'src/app/shared/services/users.service';
import { Users } from 'src/app/home/Users';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { Store } from '@ngrx/store';
import { deleteEmployee, updatedEmployee } from 'src/app/shared/store/employee/employees.actions';
import { EmployeeList, EmployeeModel } from 'src/app/shared/store/employee/employees.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit, OnChanges {

  empTitle: string = "EMPLOYEE DETAILS";
  submitted = false;
  userType: string = "employee";
  users: Users[] = [];
  updatedUser: Users;
  nameLength: number;
  limit: number;
  findData: string = '';
  employees: EmployeeModel[] = [];
  employee: EmployeeModel = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "email": "",
    "mobile": "",
    "employee_no": 0,
    "designation": "",
    "userType": "employee",
    "dob": "",
    "address":
    {
      "city": "",
      "state": "",
      "country": ""
    }

  }
  pageSize: number = 10;
  currentPage: number = 2;
  employeeLists: (string | EmployeeModel)[] = [];
  employeeList !: EmployeeModel[];
  employeeInfo !: EmployeeList;
  scrollDistance = 0.2;
  scrollUpDistance = 0.2;
  disableInfiniteScroll = false;
  isLoading = false;
  currenpage = 1;

  constructor(

    private _employee: EmployeesService,
    public dialog: MatDialog,
    private _users: UsersService,
    private store: Store<AppStateModel>,
  ) { }

  ngOnInit() {
    this.loadData();
    // this.store.dispatch(loadEmployee());
    // this.store.select(getEmployee).subscribe
    // ((item: EmployeeModel[]) => {
      // this.employeeInfo = {employeelist:item}
    //   // this.employeeList =item;
    //   // console.log(this.employeeList);
    // })
  }

  ngOnChanges() {
  }

  checkEmployees() {
    return this.employeeLists;
  }

  toggleLoading = () => this.isLoading = !this.isLoading;

  appendData = () => {
    this.toggleLoading();

    this._employee.getEmployeeDetailsPaginated(this.currentPage, this.pageSize)
      .subscribe({
        next: response => {
          this.employeeLists = [...this.employeeLists, ...response];
        },
        error: err => console.log(err),
        complete: () => {
          this.currentPage++;
          this.toggleLoading()
        }
      });
  }

  loadData = () => {
    this.toggleLoading();
    this._employee.getEmployeeDetailsPaginated(this.currenpage, this.pageSize)
      .subscribe({
        next: response => this.employeeLists = response,
        complete: () => this.toggleLoading()
      });
  }

  checkUsers() {
    this._users.get().subscribe((res) => {
      this.users = res;
    });
  }

  getEmployeesDetails() {
    this._employee.getEmployeeDetails()
      .subscribe((res) => {
        // console.log(res);
        this.employees = res;
      })
  }


  onCreate() {
    this.dialog.open(AddEmployeeDialogue).afterClosed().subscribe(result => {
      if (result) {


        console.log('User clicked "Ok"');
        this.getEmployeesDetails();

      } else {
        console.log('clicked cancel');
      }
    });
  }

  onEdit(emp: EmployeeModel) {

    this.dialog.open(EditEmployeeDialogue, { data: emp }).afterClosed().subscribe(result => {
      if (result) {


        console.log('User clicked "Ok"');
        this.getEmployeesDetails();

      } else {
        console.log('clicked cancel');
      }
    });

  }


  onDelete(emp: EmployeeModel) {
    const id = emp.id;
    if (confirm("Do you want to delete details of " + emp.firstName + " " + emp.lastName + " ?"))
      // this._employee.deleteEmployeeDetails(emp);
      this.store.dispatch(deleteEmployee({ id: id }))
    this.getEmployeesDetails();

  }

  filterByLength() {
    // console.log("nameLength"+this.nameLength);
    this._employee.getEmployeeDetails()
      .pipe(
        map(employees => employees
          .filter(emp => emp.firstName && emp.firstName.length <= this.nameLength)),
      )
      .subscribe((res) => {
        console.log(res);
        this.employeeLists = res;
      })
  }

  filterByCity(citySlc: string) {
    if (citySlc === "all") {
      this.getEmployeesDetails();

    }
    else {

      this._employee.getEmployeeDetails()
        .pipe(
          map(employees => employees
            .filter(emp => emp.address.city && emp.address.city === citySlc)),
        )
        .subscribe((res) => {
          console.log(res);
          this.employeeLists = res;
        })
    }
  }

  filterByLimit() {

    this._employee.getEmployeeDetails()
      .pipe(
        map(employees => employees
          .filter(emp => emp.id <= this.limit)),
      )
      .subscribe((res) => {
        // console.log(res);
        this.employeeLists = res;
      })
  }



  onAdmin(emp: EmployeeModel) {
    if (confirm("Do you want to change " + emp.firstName + " " + emp.lastName + "'s role ?")) {
      this._users.get().subscribe((res) => {
        this.updatedUser = res.find((a: any) => a.employee_no === emp.employee_no);
        if (this.updatedUser) {
          const updatedUser = { ...this.updatedUser, userType: emp.userType === 'admin' ? 'employee' : 'admin' };
          this._users.updateUser(updatedUser).subscribe((res) => {
            if (res) {
              console.log(res);
              console.log("emp userType" + updatedUser.userType)
              const updatedEmp = { ...emp, userType: updatedUser.userType }
              this.store.dispatch(updatedEmployee({employeeData : updatedEmp}))
              // this._employee.updateEmployeeDetails(updatedEmp);
            }
          });
        } else {
          console.error('User not found.');
        }
      });
      this.checkEmployees();
    }
  }



}




