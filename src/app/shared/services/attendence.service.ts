import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../apiUrls';
import { AttendenceModel } from '../store/attendence/attendence.model';


@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  constructor(private http:HttpClient) { }

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

  // createLeavesDetails(data : AttendenceModel) {
  //   // console.log("data received"+data.firstName);
  //   return this.http.post<AttendenceModel>(this.baseurl+ apiUrls.Attendence.attendence_details,data).pipe(
  //     tap(()=>{
  //       this.http.get<AttendenceModel>("http://localhost:3000/Employees?_limit=1&_sort=id&_order=desc");
  //     })
  //   )
    
  // }

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
