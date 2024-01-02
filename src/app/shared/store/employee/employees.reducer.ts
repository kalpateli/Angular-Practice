import { createReducer, on } from "@ngrx/store";
import { EmployeeState } from "./employees.states";
import { addEmployee, deleteEmployee, loadEmployee, loadEmployeeFail, loadEmployeeSuccess, updatedEmployee } from "./employees.actions";
import { EmployeeModel } from "./employees.model";


const _employeeReducer = createReducer(EmployeeState,
    on(loadEmployee, (state) => {

        return {
            ...state
        };
    }),
    on(loadEmployeeSuccess, (state,action) => {
        return {
            ...state,
            employeelist : [...action.employeelist],
            Errormessage : ''
        }
    }),
    on(loadEmployeeFail, (state,action) => {
        return {
            ...state,
            employeelist : [],
            Errormessage : action.Errortext
        }
    }),
    on(addEmployee, (state,action) => {
        const _employee = {...action.employeeData};
        _employee.id = state.employeelist.length+1;
        return {
            ...state,
            employeelist : [...state.employeelist , _employee]
        }
    }),
    on(updatedEmployee, (state,action) => {
        const _employee = {...action.employeeData};
        const updatedEmployee = state.employeelist.map(emp => {
            return _employee.id === emp.id? _employee : emp;
        })
        return {
            ...state,
            employeelist : updatedEmployee
        };
    }),
    on(deleteEmployee, (state,action) => {
        const updatedEmployee = state.employeelist.filter((data:EmployeeModel)=>{
            return data.id !== action.id;
        })
        return {
            ...state,
            employeelist : updatedEmployee
        };
    }),


)

export function employeeReducer(state: any, action: any) {
    return _employeeReducer(state, action);
}