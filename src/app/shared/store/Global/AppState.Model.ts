import  {CounterModel} from "src/app/shared/store/counter/counter.model"
import { EmployeeList } from "../employee/employees.model"
import { LeavesList } from "../leaves/leaves.model"


export interface AppStateModel {
    counter : CounterModel,
    employee : EmployeeList,
    leaves : LeavesList,
}