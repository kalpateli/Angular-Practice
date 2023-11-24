import { Component, Input, OnInit , Output , EventEmitter} from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../services/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit{

  
  employees : Employee[]=[];
  employee :any = {
    "id":"",
    "firstName":"",
    "lastName":"",
    "email":"",
    "mobile":"",
    "employee_no":"",
    "dob":"",
    "address":
    {
        "city":"",
        "state":"",
        "country":""
    },
    "password":""

}

  constructor(
    private _employee : EmployeesService,
    private router : Router
    )
    {}

  ngOnInit(){
    this.getEmployeesDetails()
  }

  getEmployeesDetails(){
    this._employee.getEmployeeDetails()
    .subscribe((res)=>{
      console.log(res);
      this.employees=res;
    })
  }

  onEdit(emp:Employee[]){
    this.employee=emp;
  }

  onUpdateEmp()
  {
    
    console.log(this.employee);
    this._employee.updateEmployeeDetails(this.employee);
  }

  onDelete(emp : Employee[]){
    this._employee.deleteEmployeeDetails(emp);
  }

}
