import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  postEmployeeDetails(data : Employee){
    console.log("data received"+data.firstName);
    this.http.post(this.baseurl+ apiUrls.Employee.employee_details,data)
    .subscribe((res:any)=>{
      console.log(JSON.stringify(res));
      alert("successfully created");
    })
  }

  updateEmployeeDetails(data : Employee){
    console.log("data received"+data.firstName);
    console.log("data:"+JSON.stringify(data));
    // console.log(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id);
    this.http.put(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id,data) 
    .subscribe((res:any)=>{
      console.log(JSON.stringify(res));
      alert("successfully created");
    }
    );

  }

  deleteEmployeeDetails( data : Employee){
    console.log("data:"+data.firstName);

    this.http.delete(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id)
    .subscribe((res:any)=>{
      console.log(res);
      alert("successfully deleted");
    }
    );

  }

}
