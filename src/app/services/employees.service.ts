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

  baseurl="http://localhost:4000"
  getEmployeeDetails():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseurl + apiUrls.Employee.employee_details);
  }
}
