import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../../../errrorMessages';
import { EditEmployeeDialogue } from 'src/app/shared/DialogueBox/edit-employe-idalogue/edit-employee-dialogue';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogue } from 'src/app/shared/DialogueBox/add-employee-dialogue/add-employee-dialogue';
import { UsersService } from 'src/app/shared/services/users.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Users } from 'src/app/home/Users';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { Store } from '@ngrx/store';
import { loadEmployee } from 'src/app/shared/store/employee/employees.actions';
import { getEmployee } from 'src/app/shared/store/employee/employees.selectors';
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
  employees: EmployeeModel[]= [];
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
  employeeList !: EmployeeModel[];
  employeeInfo !: EmployeeList;




  constructor(

    private _employee: EmployeesService,
    public dialog: MatDialog,
    private _users: UsersService,
    private _auth: AuthService,
    private store: Store<AppStateModel>
  ) {}

  ngOnInit() {
    // this.getEmployeesDetails();
    this.checkUsers();
    this.store.dispatch(loadEmployee());
    this.store.select(getEmployee).subscribe
    ((item: EmployeeModel[]) => {
      // this.employeeList =item;
      this.employeeInfo = {employeelist:item}
      // console.log(this.employeeList);
    })
  }

  ngOnChanges() {
    // console.log('Pattern Test Result:', errorMessages.pattern.password.test(this.employee.password));

  }


  checkEmployees() {
    return this.employeeInfo.employeelist;
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
    if (confirm("Do you want to delete details of " + emp.firstName + " " + emp.lastName + " ?"))
      this._employee.deleteEmployeeDetails(emp);
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
        this.employees = res;
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
          this.employees = res;
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
        this.employees = res;
      })
  }


  // onAdmin(emp: EmployeeModel) {
  //   if (confirm("Do you want to make " + emp.firstName + " " + emp.lastName + " an admin ?")) {
  //     this._users.get().subscribe((res) => {
  //       this.updatedUser = (res.find((a: any) => {
  //         return (a.employee_no === emp.employee_no);

  //       }))

        
  //     })
  //     if(emp.userType == 'admin')
  //     {
  //       emp.userType="employee";
  //       // this.updatedUser.userType = "employee";
  //       this.updatedUser = { ...this.updatedUser, userType: "employee" };
  //     }
  //     else
  //     {
  //       emp.userType="admin";
  //       // this.updatedUser.userType = "admin";
  //       this.updatedUser = { ...this.updatedUser, userType: "admin" };

  //     }
  //     this._users.updateUser(this.updatedUser)
  //       .subscribe((res) => {
  //         if (res) {
  //           console.log(res);

  //         }
  //       });
  //     console.log(emp)
  //     this._employee.updateEmployeeDetails(emp);



  //   }

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
                const updatedEmp = { ...emp ,userType: updatedUser.userType}
                // emp.userType = updatedUser.userType;
                this._employee.updateEmployeeDetails(updatedEmp);
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

  // searchData() {
  //   if (this.findData === "") {
  //     this.getEmployeesDetails();

  //   }
  //   else {
  //     this._employee.getEmployeeDetails()
  //       .pipe(
  //         map(employees => employees
  //           .filter(emp =>
  //             emp.firstName == this.findData || emp.lastName == this.findData)),
  //       )
  //       .subscribe((res) => {
  //         console.log(res);
  //         this.employees = res;
  //       })
  //   }
  // }


