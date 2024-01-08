import { counterReducer } from "../counter/counter.reducer"
import { employeeReducer } from "../employee/employees.reducer"
import { leavesReducer } from "../leaves/leaves.reducer"
// import { paginationReducer } from "../pagination/pagination.reducer"

export const AppState = {
    counter : counterReducer,
    employee : employeeReducer,
    leaves : leavesReducer,
    // pagination : paginationReducer
}