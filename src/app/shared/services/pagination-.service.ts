import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { EmployeeList, EmployeeModel } from '../store/employee/employees.model';
import { EmployeesService } from 'src/app/admin/services/employees.service';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private totalItems : 100;

  
  constructor(private _employee : EmployeesService) { }

  // getItems(page = 1 , itemsPerPage = 10) : Observable<string[]> {

  //   const startIndex = (page-1) * itemsPerPage ; 
  //   const endIndex = startIndex + itemsPerPage ; 
  //   const items : string[] = [];
    
  //   for(let i = startIndex; i < endIndex ; i++)
  //   {
  //     items.push(`${i+1}`)
  //   }

  //   return of(items).pipe(delay(500));
  // }
  getItems(page = 1, itemsPerPage = 10): Observable<EmployeeModel[]> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return this._employee.getEmployeeDetails()
  }

  

}
