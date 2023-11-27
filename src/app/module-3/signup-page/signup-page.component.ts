import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  employeeObject : Employee = {
        "id":0,
        "firstName":"",
        "lastName":"",
        "email":"",
        "mobile":"",
        "employee_no":0,
        "dob":"",
        "address":
        {
            "city":"",
            "state":"",
            "country":""
        },
        "password":""

    }

    constructor(private _employees:EmployeesService){

    }

    ngOnInit() : void{

    }

    onCreateEmp(){
      this._employees.postEmployeeDetails(this.employeeObject);
    }
  

}
