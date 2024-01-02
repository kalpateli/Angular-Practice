import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeesService } from "src/app/admin/services/employees.service";
import { 
    LOAD_EMPLOYEE, 
    addEmployee, 
    addEmployeeSuccess, 
    loadEmployeeFail, 
    loadEmployeeSuccess } from "./employees.actions";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";
import { EmployeeModel } from "./employees.model";

@Injectable()

export class EmployeesEffects {

    constructor(
        private action$: Actions,
        private _employees: EmployeesService
    ) {



    }

    _employee = createEffect(() => this.action$.pipe(
        ofType(LOAD_EMPLOYEE),
        exhaustMap((action) => {
            return this._employees.getEmployeeDetails().pipe(
                map((data) => {
                    return loadEmployeeSuccess({ employeelist: data });
                }),
                catchError((_error) => of(loadEmployeeFail({ Errortext: _error.message })))
            )
        })
    ))

    _addEmployee = createEffect(() => this.action$.pipe(
        ofType(addEmployee),
        exhaustMap((action) => {
            return this._employees.createEmployeeDetails(action.employeeData).pipe(
                map((data : EmployeeModel) => {
                    return addEmployeeSuccess({ employeeData: data as EmployeeModel});
                }),
                catchError((_error) => of(loadEmployeeFail({ Errortext: _error.message })))
            )
        })
    ))
    

}