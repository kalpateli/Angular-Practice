import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { loadLeaves, updatedLeaves } from 'src/app/shared/store/leaves/leaves.action';
import { LeavesList, LeavesModel } from 'src/app/shared/store/leaves/leaves.model';
import { getLeaves } from 'src/app/shared/store/leaves/leaves.selectors';

@Component({
  selector: 'app-employees-leaves',
  templateUrl: './employees-leaves.component.html',
  styleUrls: ['./employees-leaves.component.scss']
})


export class EmployeesLeavesComponent implements OnInit{
  leaves: LeavesModel[] = [];
  leave : LeavesModel = {
    "id": 0,
    "employee_no": 0,
    "employee_fname": "",
    "employee_lname": "",
    "totalDays": 0,
    "from_date": "",
    "to-date": "",
    "full": "",
    "half": "",
    "reason": "",
    "document": "",
    "status": ""
  }
  displayedColumns: string[] = ['Id', 'Employee_no', 'Employee_fname','Employee_lname', 'from-Date', 'to-Date', 'full', 'half', 'reason', 'Status','action'];
  leaveslist: LeavesList = { leavesList: [] };
  leaveslist$: Observable<LeavesModel[]> | undefined;
  actioned : string = "pending";

  constructor(
    private store : Store<AppStateModel>,

  ){}


  ngOnInit(): void {

    this.store.dispatch(loadLeaves());
  
    this.store.select(getLeaves).subscribe((item: LeavesModel[]) => {
      this.leaveslist = {leavesList : item};
    });
  }

  checkLeaves()
  {
    return this.leaveslist.leavesList;
  }

  removeData(){

  }

  action(leaveslist: LeavesModel, actionType: string){
    
    const updatedLeavesAction = updatedLeaves({
      leavesData: { ...leaveslist, status: actionType }
    });
    this.actioned = actionType;
    this.store.dispatch(updatedLeaves(updatedLeavesAction))
  }

  // {
//   "id": 1,
//   "employee_no": 8394,
//   "totalDays": 1,
//   "from_date": "10-Jan-2024",
//   "to-date": "10-Jan-2024",
//   "full": "yes/no",
//   "half": "no/first/second",
//   "reason": "",
//   "document": "",
//   "status": "approved/pending/rejected"
// },
}
