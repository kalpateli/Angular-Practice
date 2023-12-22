import { Component , Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Employee } from "src/app/Employee";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { errorMessages } from "src/app/errrorMessages";
import { EmployeesService } from "src/app/admin/services/employees.service";

@Component({
    selector: 'app-edit-employee-dialogue',
    templateUrl: './edit-employee-dialogue.html',
    styles:
    [` .error {
        color : red;  /* Change this to apply the desired error style */
      }
    
      .errorInp {
        border :1px solid red;  
      }

      .dialogue-container{
        height: 100%;
        width: 500px;
        overflow-y:auto;
        max-height: 80vh; 
        padding: 10px; 
      }
    `],
})

export class EditEmployeeDialogue {

    employeeDetails: FormGroup;
    employees: Employee[] = [];
    errorMessages = errorMessages;
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

    constructor(public dialogRef: MatDialogRef<EditEmployeeDialogue>, 
                private fb: FormBuilder,
                private _employee : EmployeesService,
                @Inject(MAT_DIALOG_DATA) public data: any) {
                    console.log(data)
        this.employeeDetails = this.fb.group({
            id: new FormControl(data.id),
            firstName: new FormControl(data.firstName, [Validators.required]),
            lastName: new FormControl(data.lastName, [Validators.required]),
            email: new FormControl(data.email,
                [Validators.required, Validators.pattern(/^([\w+-.%]+@[\w-]+\.[A-Za-z]{2,})+$/)]),
            mobile: new FormControl(data.mobile, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(errorMessages.pattern.mobile)]),
            employee_no: new FormControl(data.employee_no, [Validators.required, Validators.min(1000), Validators.max(999999), Validators.pattern(errorMessages.pattern.emp_no)]),
            dob: new FormControl(data.dob, [Validators.required]),
            city: new FormControl(data.address.city, [Validators.required]),
            state: new FormControl(data.address.state, [Validators.required]),
            country: new FormControl(data.address.country, [Validators.required]),
            password: new FormControl(data.password, [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(errorMessages.pattern.password)])
        })
    }


    
    onUpdateEmp(emp: FormGroup) {
      // this.employee={...employee_no.}
        this.employee.id = emp.get('id').value;
        this.employee.firstName = emp.get('firstName').value;
        this.employee.lastName = emp.get('lastName').value;
        this.employee.email = emp.get('email').value;
        this.employee.mobile = emp.get('mobile').value;
        this.employee.employee_no = emp.get('employee_no').value;
        this.employee.dob = emp.get('dob').value;
        this.employee.address.city = emp.get('city').value;
        this.employee.address.state = emp.get('state').value;
        this.employee.address.country = emp.get('country').value;
        this.employee.password = emp.get('password').value;
        
        // console.log(this.employee.id);
        this._employee.updateEmployeeDetails(this.employee);
        this.closeDialog(true);
      }


    closeDialog(result: boolean): void {
        this.dialogRef.close(result);
    }


    f(controlName: any) {
        if (controlName) {
          return this.employeeDetails.controls[controlName];
        }
        return null;
      }

}