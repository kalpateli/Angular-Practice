import { Component , OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{

  employees : Employee[]=[];
  constructor(private _employee : EmployeesService){

  }

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
}
