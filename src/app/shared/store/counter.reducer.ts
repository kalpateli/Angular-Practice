import { increment, decrement, reset , customIncrement , rename} from "./counter.actions";
import { createReducer, on } from "@ngrx/store";
import { InitialState } from "./counter.states";


const _counterReducer = createReducer(InitialState,
    on(increment, (state) => {

        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrement, (state) => {

        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(reset, (state) => {

        return {
            ...state,
            counter: 0
        };
    }),
    on(customIncrement, (state,action) => {

        return {
            ...state,
            counter: action.action == 'add'? state.counter + action.value : state.counter - action.value
        };
    }),

    on(rename, (state,action) => {
        return {
            ...state,
            pageName: action.page
        };
    }),

)

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}