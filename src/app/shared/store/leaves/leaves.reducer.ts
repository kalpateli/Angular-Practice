import { createReducer, on } from "@ngrx/store";
import { LeavesState } from "./leaves.states";
import { addLeaves, deleteLeaves, loadLeaves, loadLeavesFail, loadLeavesSuccess, updatedLeaves, updatedLeavesSuccess } from "./leaves.action";
import { LeavesModel } from "./leaves.model";


const _leavesReducer = createReducer(LeavesState,
    on(loadLeaves, (state) => {
        return {
            ...state
        };
    }),
    on(loadLeavesSuccess, (state,action) => {
        return {
            ...state,
            leavesList : [...action.leaveslist],
            Errormessage : 'Successfully loaded'
        }
    }),
    on(loadLeavesFail, (state,action) => {
        return {
            ...state,
            leavesList : [],
            Errormessage : action.Errortext
        }
    }),
    on(addLeaves, (state,action) => {
        const _leaves = {...action.leavesData};
        _leaves.id = state.leavesList.length+1;
        return {
            ...state,
            leavesList : [...state.leavesList , _leaves]
        }
    }),
    on(updatedLeavesSuccess, (state,action) => {
        const _leaves = {...action.leavesData};
        const updatedLeaves = state.leavesList.map(emp => {
            return _leaves.id === emp.id? _leaves : emp;
        })
        return {
            ...state,
            leavesList : updatedLeaves
        };
    }),
    on(deleteLeaves, (state,action) => {
        const updatedLeaves = state.leavesList.filter((data:LeavesModel)=>{
            return data.id !== action.id;
        })
        return {
            ...state,
            leavesList : updatedLeaves
        };
    }),


)

export function leavesReducer(state: any, action: any) {
    return _leavesReducer(state, action);
}