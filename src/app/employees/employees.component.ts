import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../services/employees.service';
import { filter , map} from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {

  nameLength: number;
  limit: number;
  findData: string;
  employees: Employee[] = [];
  employee: Employee = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "email": "",
    "mobile": "",
    "employee_no": 0,
    "dob": "",
    "address":
    {
      "city": "",
      "state": "",
      "country": ""
    },
    "password": ""

  }


  constructor(
    private _employee: EmployeesService
  ) { }

  ngOnInit() {
    this.getEmployeesDetails()
  }

  getEmployeesDetails() {
    this._employee.getEmployeeDetails()
      .subscribe((res) => {
        console.log(res);
        this.employees = res;
      })
  }

  onCreateEmp(){
    this._employee.postEmployeeDetails(this.employee);
  }

  onEdit(emp: Employee) {
    this.employee = emp;
  }

  onUpdateEmp() {
    console.log(this.employee);
    this._employee.updateEmployeeDetails(this.employee);
  }

  onDelete(emp: Employee) {
    if(confirm("Do you want to delete details of "+emp.firstName+" "+emp.lastName+" ?"))
    this._employee.deleteEmployeeDetails(emp);
  }

  filterByLength(){
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

  filterByCity(citySlc : string){
    if(citySlc === "all")
    {
      this.getEmployeesDetails();
      
    }
    else
    {

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

  filterByLimit(){

    this._employee.getEmployeeDetails()  
    .pipe(
      map(employees => employees
        .filter(emp => emp.id <= this.limit)),
        )
      .subscribe((res) => {
        console.log(res);
        this.employees = res;
      })
  }

  searchData(){
    if(this.findData === "")
    {
      this.getEmployeesDetails();
      
    }
    else
    {
    this._employee.getEmployeeDetails()  
    .pipe(
      map(employees => employees
        .filter(emp => 
          emp.firstName == this.findData || emp.lastName == this.findData)),
        )
      .subscribe((res) => {
        console.log(res);
        this.employees = res;
      })
  }


}
}