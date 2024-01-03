import { counterReducer } from "../counter/counter.reducer"
import { employeeReducer } from "../employee/employees.reducer"
// import { paginationReducer } from "../pagination/pagination.reducer"

export const AppState = {
    counter : counterReducer,
    employee : employeeReducer,
    // pagination : paginationReducer
}