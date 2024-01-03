import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../apiUrls';
import { EmployeeList, EmployeeModel } from 'src/app/shared/store/employee/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:3000";

  getEmployeeDetailsPaginated(page: number, pageSize: number): Observable<EmployeeModel[]> {
    const url = `${this.baseurl}${apiUrls.Employee.employee_details}?_page=${page}&_limit=${pageSize}`;
    return this.http.get<EmployeeModel[]>(url).pipe(delay(500));
  }
  
  getEmployeeDetails():Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>(this.baseurl + apiUrls.Employee.employee_details);
  }

  postEmployeeDetails(data : EmployeeModel){
    this.http.post(this.baseurl+ apiUrls.Employee.employee_details,data)
    .subscribe((res:any)=>{
      alert("successfully created");
    })
  }

  createEmployeeDetails(data : EmployeeModel) {
    // console.log("data received"+data.firstName);
    return this.http.post<EmployeeModel>(this.baseurl+ apiUrls.Employee.employee_details,data).pipe(
      tap(()=>{
        this.http.get<EmployeeModel>("http://localhost:3000/Employees?_limit=1&_sort=id&_order=desc");
      })
    )
    
  }

  updateEmployeeDetails(data : EmployeeModel){
    this.http.put(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id,data) 
    .subscribe((res:any)=>{
      alert("successfully created");
    }
    );

  }

  updatedEmployeeDetails(data : EmployeeModel){
    return this.http.put(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id,data); 

  }

  deleteEmployeeDetails( data : EmployeeModel){

    this.http.delete(this.baseurl+ apiUrls.Employee.employee_details+"/"+data.id)
    .subscribe((res:any)=>{
      alert("successfully deleted");
    }
    );

  }

  delete_EmployeeDetails( id : number){
    return this.http.delete(this.baseurl+ apiUrls.Employee.employee_details+"/"+id);
  }
}
