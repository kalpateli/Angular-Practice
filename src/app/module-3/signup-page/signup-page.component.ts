import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  employeeObject :any = {
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

    constructor(private _employees:EmployeesService){

    }

    ngOnInit() : void{

    }

    onCreateEmp(){
      this._employees.postEmployeeDetails(this.employeeObject);
    }
  

}
