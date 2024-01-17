import { createAction , props } from "@ngrx/store";
import { LeavesModel } from "./leaves.model";

// export const LOAD_LEAVES_PAGINATED = '[leaves] load Leaves success';
// export const LOAD_LEAVES_PAGINATED_SUCCESS = '[leaves] load Leaves success';
export const LOAD_LEAVES_SUCCESS = '[leaves] load Leaves success';
export const LOAD_LEAVES = '[leaves] load Leaves';
export const LOAD_LEAVES_FAIL = '[leaves] load Leaves fail';
export const ADD_LEAVES_SUCCESS = '[leaves] add Leaves success';
export const ADD_LEAVES = '[leaves] add Leaves'; 
export const UPDATE_LEAVES_SUCCESS = '[leaves] update Leaves success';
export const UPDATE_LEAVES = '[leaves] update Leaves ';
export const DELETE_LEAVES_SUCCESS = '[leaves] delete Leaves success';
export const DELETE_LEAVES = '[leaves] delete Leaves ';


// export const loadLeavesPaginated = createAction(
//     LOAD_LEAVES_PAGINATED,
//     props<{ page: number; pageSize: number }>()
//   );
  
//   export const loadLeavesPaginatedSuccess = createAction(
//     LOAD_LEAVES_PAGINATED_SUCCESS,
//     props<{ leaveslist: LeavesModel[] }>()
//   );
export const loadLeaves = createAction(LOAD_LEAVES);
export const loadLeavesSuccess = createAction(LOAD_LEAVES_SUCCESS, props<{leaveslist:LeavesModel[]}>());
export const loadLeavesFail = createAction(LOAD_LEAVES_FAIL, props<{Errortext:string}>());
export const addLeavesSuccess = createAction(ADD_LEAVES_SUCCESS ,  props<{leavesData : LeavesModel}>());
export const addLeaves = createAction(ADD_LEAVES , props<{leavesData : LeavesModel}>());
export const updatedLeavesSuccess = createAction( UPDATE_LEAVES_SUCCESS,  props<{leavesData : LeavesModel}>());
export const updatedLeaves = createAction(UPDATE_LEAVES ,  props<{leavesData : LeavesModel}>());
export const deleteLeavesSuccess = createAction(DELETE_LEAVES_SUCCESS , props<{id : number}>());
export const deleteLeaves = createAction(DELETE_LEAVES , props<{id : number}>());
