import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { errorMessages } from "src/app/errrorMessages";
import { EmployeeModel } from "../../store/employee/employees.model";
import { AppStateModel } from "../../store/Global/AppState.Model";
import { Store } from "@ngrx/store";
import { updatedEmployee } from "../../store/employee/employees.actions";
import { AttendenceService } from "../../services/attendence.service";
import { AttendenceModel, Employees } from "../../store/attendence/attendence.model";
import { map } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-marking',
  templateUrl: './marking.component.html',
  styles:
    [`
      .dialogue-content{
        justify-content:center;
        width:max-content;
        align-self:center
      }

      
      .dialogue-container{
        height: 100%;
        padding: 10px; 
      }
    `],
})

export class MarkingComponent implements OnInit {


  currentTime: string;
  today: string;
  filteredAttendanceRecords: any;
  filterEmployeesRecords: any;
  loggedInUser: any;
  empData: Employees = {
    emp_id: 0,
    employee_no: 0,
    mark_in_time: "",
    mark_out_time: "",

  }
  updatedData: AttendenceModel = {
    id: 0,
    date: "",
    employees: [],
    absentees: [],
  };
  actionIn = false;

  constructor(public dialogRef: MatDialogRef<MarkingComponent>,
    private fb: FormBuilder,
    private store: Store<AppStateModel>,
    private attendance: AttendenceService,
    private auth: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.today = now.toLocaleDateString();
    this.loggedInUser = this.auth.getUser();
    
  }
  
  checkMarkedIn(){
    // console.log(JSON.parse(this.auth.getmarkedin()))
    return JSON.parse(this.auth.getmarkedin());
   
  }

  checkMarkedOut(){
    // console.log(JSON.parse(this.auth.getmarkedout()))
    return JSON.parse(this.auth.getmarkedout());

  }

  updatingTimingsApi(id: number, data: AttendenceModel, callback: (success: boolean) => void): void{
    this.attendance.patchTiming(id, data).subscribe(
      () => {
        console.log("successfull")
        callback(true);
      },
      (err) => {
        callback(false)
      }
    )

  }


  markedIn() {
    this.empData.employee_no = this.loggedInUser.employee_no;
    this.empData.mark_in_time = this.currentTime;


    this.attendance.getAttendanceDetails().subscribe((records) => {
      this.filteredAttendanceRecords = records.filter((record) => {
        return record.date === this.today;
      });
      const attendanceRecord = this.filteredAttendanceRecords[0];
      const id = this.filteredAttendanceRecords[0].id;
      const employeeIndex = attendanceRecord.employees.findIndex((record) => {
        return record.employee_no === this.loggedInUser.employee_no;
      });

      if (employeeIndex == -1) {
        if (attendanceRecord.employees.length > 0) {
          const lengthAbs = this.filteredAttendanceRecords[0].employees.length;
          this.empData.emp_id = lengthAbs + 1;
        }
        else {
          this.empData.emp_id = 1;
        }
        this.updatedData = { ...this.filteredAttendanceRecords[0] }
        this.updatedData.employees.push(this.empData)
        this.updatingTimingsApi(id, this.updatedData ,(success)=>{
          if(success){
            this.auth.setMarkedIn("true");
            this.auth.setMarkedOut("false");
          }
        });
        
      }
      else{
      //   if (attendanceRecord.employees[employeeIndex].mark_out_time === "") {
          attendanceRecord.employees[employeeIndex].mark_in_time = this.currentTime;
          this.updatedData = { ...attendanceRecord };
          this.updatingTimingsApi(id, this.updatedData,(success)=>{
            if(success)
            {
              this.auth.setMarkedIn("true");
              this.auth.setMarkedOut("false");
            }
          });
      //   }
      //   else {
      //     const lengthAbs = this.filteredAttendanceRecords[0].employees.length;
      //     this.empData.emp_id = lengthAbs + 1;
      //     this.updatedData = { ...this.filteredAttendanceRecords[0] }
      //     this.updatedData.employees.push(this.empData);
      //     this.updatingTimingsApi(id, this.updatedData);
      //   }
      }
    });

    this.closeDialog(true);
  }


  markedOut() {

    this.attendance.getAttendanceDetails().subscribe((records) => {
      this.filteredAttendanceRecords = records.filter((record) => {
        return record.date === this.today;
      });

      const id = this.filteredAttendanceRecords[0].id;
      const attendanceRecord = this.filteredAttendanceRecords[0];
      const employeeIndex = attendanceRecord.employees.findIndex((record) => {
        return record.employee_no === this.loggedInUser.employee_no;
      });
      if (employeeIndex !== -1) {
        const employeeIndex$ = attendanceRecord.employees.findIndex((record) => {
          return record.mark_out_time === "";
        });
        attendanceRecord.employees[employeeIndex$].mark_out_time = this.currentTime;
        this.updatedData = { ...attendanceRecord };
        this.updatingTimingsApi(id, this.updatedData,(success)=>{
          if(success)
          {
            this.auth.setMarkedOut("true");
          }
        });
      } else {
        console.log('Employee not found in attendance record.');
      }


    });

    this.closeDialog(true);
  }


  closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }



}
