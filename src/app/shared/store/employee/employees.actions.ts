import { createAction , props } from "@ngrx/store";
import { EmployeeModel } from "./employees.model";


export const LOAD_EMPLOYEE_SUCCESS = '[Employees] load Employee success';
export const LOAD_EMPLOYEE = '[Employees] load Employee';
export const LOAD_EMPLOYEE_FAIL = '[Employees] load Employee fail';
export const ADD_EMPLOYEE_SUCCESS = '[employee] add Employee success';
export const ADD_EMPLOYEE = '[employee] add Employee'; 


export const loadEmployee = createAction(LOAD_EMPLOYEE);
export const loadEmployeeSuccess = createAction(LOAD_EMPLOYEE_SUCCESS, props<{employeelist:EmployeeModel[]}>());
export const loadEmployeeFail = createAction(LOAD_EMPLOYEE_FAIL, props<{Errortext:string}>());
export const addEmployeeSuccess = createAction(ADD_EMPLOYEE_SUCCESS ,  props<{employeeData : EmployeeModel}>());
export const addEmployee = createAction(ADD_EMPLOYEE ,  props<{employeeData : EmployeeModel}>());
export const updatedEmployee = createAction('updateEmployee' ,  props<{employeeData : EmployeeModel}>());
export const deleteEmployee = createAction('deleteEmployee' , props<{id : number}>());
