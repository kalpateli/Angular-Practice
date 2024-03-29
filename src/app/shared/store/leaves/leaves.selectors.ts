import { createFeatureSelector,createSelector } from "@ngrx/store";
import { LeavesList, LeavesModel } from "./leaves.model";


const getLeavesState = createFeatureSelector<LeavesList>('leaves');

export const getLeavesPaginated = ( page : number , pageSize : number )=>createSelector(getLeavesState,(state)=>{
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return state.leavesList.slice(startIndex, endIndex);
})

export const getLeaves = createSelector(getLeavesState,(state)=>{
    return state.leavesList;
})

export const getLeavesById = ( leavesid : number ) => createSelector(getLeavesState,(state)=>{
    return state.leavesList.find((leave:LeavesModel)=> leave.id === leavesid) as LeavesModel;
})

export const getEmployeeInfo = createSelector(getLeavesState,(state)=>{
    return state;
})