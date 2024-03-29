import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { errorMessages } from "src/app/errrorMessages";
import { EmployeesService } from "src/app/admin/services/employees.service";
import { EmployeeList, EmployeeModel } from "../../store/employee/employees.model";
import { AppStateModel } from "../../store/Global/AppState.Model";
import { Store } from "@ngrx/store";
import { addEmployee } from "../../store/employee/employees.actions";


@Component({
  selector: 'app-add-employee-dialogue',
  templateUrl: './add-employee-dialogue.html',
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

export class AddEmployeeDialogue {

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
    "userType": "employee",
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
  employeeData : EmployeeModel;

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeDialogue>,
    private fb: FormBuilder,
    private _employee: EmployeesService,
    private store : Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
    this.employeeDetails = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('',
        [Validators.required, Validators.pattern(/^([\w+-.%]+@[\w-]+\.[A-Za-z]{2,})+$/)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(errorMessages.pattern.mobile)]),
      employee_no: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(999999), Validators.pattern(errorMessages.pattern.emp_no)]),
      designation: new FormControl('', [Validators.required]),
      userType: new FormControl('employee'),
      dob: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(errorMessages.pattern.password)])
    })
  }


  onCreateEmp(employeeDetails: FormGroup) {
    // console.log(employeeDetails.controls);
    console.log(employeeDetails);
    this.employee.firstName = employeeDetails.get('firstName').value;
    this.employee.lastName = employeeDetails.get('lastName').value;
    this.employee.email = employeeDetails.get('email').value;
    this.employee.mobile = employeeDetails.get('mobile').value;
    this.employee.employee_no = employeeDetails.get('employee_no').value;
    this.employee.designation = employeeDetails.get('designation').value;
    this.employee.userType = employeeDetails.get('userType').value;
    this.employee.dob = employeeDetails.get('dob').value;
    this.employee.address.city = employeeDetails.get('city').value;
    this.employee.address.state = employeeDetails.get('state').value;
    this.employee.address.country = employeeDetails.get('country').value;
    // this.employee.password = employeeDetails.get('password').value;

    this.store.dispatch(addEmployee({employeeData : this.employee }))
    // this._employee.postEmployeeDetails(this.employee);
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