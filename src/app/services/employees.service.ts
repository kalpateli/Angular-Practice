import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Employee } from '../Employee';
import { apiUrls } from '../apiUrls';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:3000"
  getEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseurl + apiUrls.Employee.employee_details);
  }

  postEmployeeDetails(data:any){
    console.log("data received"+data);

    this.http.post(this.baseurl+ apiUrls.Employee.employee_details,data)
    .subscribe((res:any)=>{
      console.log(res);
      alert("successfully created");
    })
  }

  updateEmployeeDetails(data : any){
    console.log("data received"+data.firstName);
    this.http.put(this.baseurl+ apiUrls.Employee.employee_details,data)
    .subscribe((res:any)=>{
      console.log(res);
      alert("successfully created");
    }
    );

  }

  deleteEmployeeDetails( data : any){
    console.log("data:"+data.firstName);

    this.http.delete(this.baseurl+ apiUrls.Employee.employee_details,data)
    .subscribe((res:any)=>{
      console.log(res);
      alert("successfully deleted");
    }
    );

  }

}
