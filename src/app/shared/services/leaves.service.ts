import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../apiUrls';
import { EmployeeList, EmployeeModel } from 'src/app/shared/store/employee/employees.model';
import { LeavesModel } from '../store/leaves/leaves.model';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private http:HttpClient) { }

  baseurl="http://localhost:3000";

  getLeavesDetailsPaginated(page: number, pageSize: number): Observable<LeavesModel[]> {
    const url = `${this.baseurl}${apiUrls.Leaves.leaves_details}?_page=${page}&_limit=${pageSize}`;
    return this.http.get<LeavesModel[]>(url).pipe(delay(500));
  }
  
  getLeavesDetails():Observable<LeavesModel[]>{
    return this.http.get<LeavesModel[]>(this.baseurl + apiUrls.Leaves.leaves_details);
  }

  postLeavesDetails(data : LeavesModel){
    this.http.post(this.baseurl+ apiUrls.Leaves.leaves_details,data)
    .subscribe((res:any)=>{
      alert("successfully created");
    })
  }

  createLeavesDetails(data : LeavesModel) {
    // console.log("data received"+data.firstName);
    return this.http.post<LeavesModel>(this.baseurl+ apiUrls.Leaves.leaves_details,data).pipe(
      tap(()=>{
        this.http.get<LeavesModel>("http://localhost:3000/Employees?_limit=1&_sort=id&_order=desc");
      })
    )
    
  }

  updateLeavesDetails(data : LeavesModel){
    this.http.put(this.baseurl+ apiUrls.Leaves.leaves_details+"/"+data.id,data) 
    .subscribe((res:any)=>{
      alert("successfully created");
    }
    );

  }

  updatedLeavesDetails(data : LeavesModel){
    return this.http.put(this.baseurl+ apiUrls.Leaves.leaves_details+"/"+data.id,data); 

  }

  deleteLeavesDetails( data : LeavesModel){

    this.http.delete(this.baseurl+ apiUrls.Leaves.leaves_details+"/"+data.id)
    .subscribe((res:any)=>{
      alert("successfully deleted");
    }
    );

  }

  delete_LeavesDetails( id : number){
    return this.http.delete(this.baseurl+ apiUrls.Leaves.leaves_details+"/"+id);
  }
}
