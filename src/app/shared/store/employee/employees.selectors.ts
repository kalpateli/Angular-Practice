import { createFeatureSelector,createSelector } from "@ngrx/store";
import { EmployeeList, EmployeeModel } from "./employees.model";

const getEmployeeState = createFeatureSelector<EmployeeList>('employee');

export const getEmployee = createSelector(getEmployeeState,(state)=>{
    return state.employeelist;
})

export const getEmployeeById = (employeeid : number) => createSelector(getEmployeeState,(state)=>{
    return state.employeelist.find((employee:EmployeeModel)=> employee.id === employeeid) as EmployeeModel;
})

export const getEmployeeInfo = createSelector(getEmployeeState,(state)=>{
    return state;
})



    // export const getChannel = createSelector(getCounterState,(state)=>{
    //     return state.pageName;
    // })