import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../apiUrls';
import { EmployeeList, EmployeeModel } from 'src/app/shared/store/employee/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:3000";

  getEmployeeDetails():Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(this.baseurl + apiUrls.Employee.employee_details);
  }

  postEmployeeDetails(data : EmployeeModel){
    // console.log("data received"+data.firstName);
    this.http.post(this.baseurl+ apiUrls.Employee.employee_details,data)
    .subscribe((res:any)=>{
      // console.log(JSON.stringify(res));
      alert("successfully created");
    })
  }

  createEmployeeDetails(data : EmployeeModel) : Observable<EmployeeModel>{
    // console.log("data received"+data.firstName);
    return this.http.post<EmployeeModel>(this.baseurl+ apiUrls.Employee.employee_details,data).pipe(
      tap(()=>{
        this.http.get<EmployeeModel>("http://localhost:3000/Employees?_limit=1&_sort=id&_order=desc");
      })
    )
    
  }

  updateEmployeeDetails(data : EmployeeModel){
    // console.log("data received"+data.firstName);
    // console.log("data:"+JSON.stringify(data));
    // console.log(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id);
    this.http.put(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id,data) 
    .subscribe((res:any)=>{
      // console.log(JSON.stringify(res));
      alert("successfully created");
    }
    );

  }

  deleteEmployeeDetails( data : EmployeeModel){
    // console.log("data:"+data.firstName);

    this.http.delete(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id)
    .subscribe((res:any)=>{
      // console.log(res);
      alert("successfully deleted");
    }
    );

  }

}
