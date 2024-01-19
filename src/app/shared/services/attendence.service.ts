import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../apiUrls';
import { AttendenceModel, Employees } from '../store/attendence/attendence.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(
    private http:HttpClient,
    private auth: AuthService
    ) { }

  baseurl="http://localhost:3000";

  
  getAttendanceDetails():Observable<AttendenceModel[]>{
    return this.http.get<AttendenceModel[]>(this.baseurl + apiUrls.Attendence.attendence_details);
  }

  postAttendanceDetails(data : AttendenceModel){
    this.http.post(this.baseurl+ apiUrls.Attendence.attendence_details,data)
    .subscribe((res:any)=>{
      alert("successfully created");
    })
  }
  

  patchTiming(id : number , data:AttendenceModel ){
    return this.http.patch(this.baseurl + apiUrls.Attendence.attendence_details + '/'+ id ,data)
  }

  createAttendanceRecord() {
    const currentDate = new Date().toLocaleDateString();

    this.getAttendanceDetails().subscribe((existingRecords) => {
      const todayRecordIndex = existingRecords.findIndex((record) => record.date === currentDate);
      const id = (existingRecords[(existingRecords.length)-1].id + 1);
      if (todayRecordIndex === -1) {
        const newRecord = {
          id: id,
          date: currentDate,
          employees: [],
          absentees: [],
        };
        
        this.auth.setMarkedIn("false");
        this.auth.setMarkedOut("true");
        // existingRecords.push(newRecord);
        this.http.post(this.baseurl+apiUrls.Attendence.attendence_details, newRecord).subscribe(() => {
          console.log(`Attendance record created for ${currentDate}`);
        });
      } else {
        console.log(`Attendance record for ${currentDate} already exists.`);
      }
    });
  }


  updateAttendanceDetails(data : AttendenceModel){
    this.http.put(this.baseurl+ apiUrls.Attendence.attendence_details+"/"+data.id,data) 
    .subscribe((res:any)=>{
      alert("successfully created");
    }
    );

  }

  updatedAttendanceDetails(data : AttendenceModel){
    return this.http.put(this.baseurl+ apiUrls.Attendence.attendence_details+"/"+data.id,data); 

  }

  deleteAttendanceDetails( data : AttendenceModel){

    this.http.delete(this.baseurl+ apiUrls.Attendence.attendence_details+"/"+data.id)
    .subscribe((res:any)=>{
      alert("successfully deleted");
    }
    );

  }

  delete_AttendanceDetails( id : number){
    return this.http.delete(this.baseurl+ apiUrls.Attendence.attendence_details+"/"+id);
  }
}
