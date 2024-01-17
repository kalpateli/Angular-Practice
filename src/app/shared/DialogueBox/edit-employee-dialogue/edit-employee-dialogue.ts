import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { errorMessages } from "src/app/errrorMessages";
import { EmployeeModel } from "../../store/employee/employees.model";
import { AppStateModel } from "../../store/Global/AppState.Model";
import { Store } from "@ngrx/store";
import { updatedEmployee } from "../../store/employee/employees.actions";

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
  employees: EmployeeModel[] = [];
  errorMessages = errorMessages;
  employee: EmployeeModel = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "email": "",
    "mobile": "",
    "employee_no": 0,
    "userType": "",
    "dob": "",
    "address":
    {
      "city": "",
      "state": "",
      "country": ""
    },
    "designation": "",
    "absence" : []
  }

  constructor(public dialogRef: MatDialogRef<EditEmployeeDialogue>,
    private fb: FormBuilder,
    private store : Store<AppStateModel>,
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
      designation: new FormControl(data.designation, [Validators.required]),
      userType: new FormControl(data.userType),
      dob: new FormControl(data.dob, [Validators.required]),
      city: new FormControl(data.address.city, [Validators.required]),
      state: new FormControl(data.address.state, [Validators.required]),
      country: new FormControl(data.address.country, [Validators.required]),
    })
  }



  onUpdateEmp(emp: FormGroup) {
    this.employee.id = emp.get('id').value;
    this.employee.firstName = emp.get('firstName').value;
    this.employee.lastName = emp.get('lastName').value;
    this.employee.email = emp.get('email').value;
    this.employee.mobile = emp.get('mobile').value;
    this.employee.employee_no = emp.get('employee_no').value;
    this.employee.designation = emp.get('designation').value;
    this.employee.userType = emp.get('userType').value;
    this.employee.dob = emp.get('dob').value;
    this.employee.address.city = emp.get('city').value;
    this.employee.address.state = emp.get('state').value;
    this.employee.address.country = emp.get('country').value;

    this.store.dispatch(updatedEmployee({employeeData : this.employee}))
    // this._employee.updateEmployeeDetails(this.employee);
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