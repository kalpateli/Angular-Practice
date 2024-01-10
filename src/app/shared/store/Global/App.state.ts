import { counterReducer } from "../counter/counter.reducer"
import { employeeReducer } from "../employee/employees.reducer"
import { leavesReducer } from "../leaves/leaves.reducer"

export const AppState = {
    counter : counterReducer,
    employee : employeeReducer,
    leaves : leavesReducer,
}