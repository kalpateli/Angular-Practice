import { counterReducer } from "../counter/counter.reducer"
import { employeeReducer } from "../employee/employees.reducer"

export const AppState = {
    counter : counterReducer,
    employee : employeeReducer
}