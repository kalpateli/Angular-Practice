import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Employee } from '../../../Employee';
import { EmployeesService } from '../../../shared/services/employees.service';
import { map } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessages } from '../../../errrorMessages';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit , OnChanges {

  errorMessages = errorMessages;
  empTitle : string = "EMPLOYEE DETAILS";
  submitted = false;
  originalId: number;
  employeeDetails: FormGroup;
  nameLength: number;
  limit: number;
  findData: string = '';
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
    private _employee: EmployeesService,
    private fb: FormBuilder
  ) {
    this.employeeDetails = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('',
        [Validators.required, Validators.pattern(/^([\w+-.%]+@[\w-]+\.[A-Za-z]{2,})+$/)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(errorMessages.pattern.mobile)]),
      employee_no: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(999999), Validators.pattern(errorMessages.pattern.emp_no)]),
      dob: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(errorMessages.pattern.password)])
    })
  }

  ngOnInit() {
    this.getEmployeesDetails();
  }

  ngOnChanges(){
    // console.log('Pattern Test Result:', errorMessages.pattern.password.test(this.employee.password));

  }

  getEmployeesDetails() {
    this._employee.getEmployeeDetails()
      .subscribe((res) => {
        // console.log(res);
        this.employees = res;

      })
  }

  // onCreateEmp(){
  //   this._employee.postEmployeeDetails(this.employee);
  // }
  onCreateEmp(employeeDetails: FormGroup) {
    // console.log(employeeDetails.controls);

    this.employee.firstName = employeeDetails.get('firstName').value;
    this.employee.lastName = employeeDetails.get('lastName').value;
    this.employee.email = employeeDetails.get('email').value;
    this.employee.mobile = employeeDetails.get('mobile').value;
    this.employee.employee_no = employeeDetails.get('employee_no').value;
    this.employee.dob = employeeDetails.get('dob').value;
    this.employee.address.city = employeeDetails.get('city').value;
    this.employee.address.state = employeeDetails.get('state').value;
    this.employee.address.country = employeeDetails.get('country').value;
    this.employee.password = employeeDetails.get('password').value;


    this._employee.postEmployeeDetails(this.employee);

  }

  onEdit(emp: Employee) {
    this.originalId = emp.id;
    this.employeeDetails.patchValue({

      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      mobile: emp.mobile,
      employee_no: emp.employee_no,
      dob: emp.dob,
      city: emp.address.city,
      state: emp.address.state,
      country: emp.address.country,
      password: emp.password,
    });
    // this.employee = emp;
    // console.log(this.employeeDetails);


  }

  onUpdateEmp(emp: FormGroup) {
    this.employee.id = this.originalId
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
  }

  onDelete(emp: Employee) {
    if (confirm("Do you want to delete details of " + emp.firstName + " " + emp.lastName + " ?"))
      this._employee.deleteEmployeeDetails(emp);
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


  f(controlName: any) {
    if (controlName) {
      return this.employeeDetails.controls[controlName];
    }
    return null;
  }
}