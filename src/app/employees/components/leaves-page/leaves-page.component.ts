import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { loadLeaves } from 'src/app/shared/store/leaves/leaves.action';
import { LeavesList, LeavesModel } from 'src/app/shared/store/leaves/leaves.model';
import { getLeaves } from 'src/app/shared/store/leaves/leaves.selectors';

@Component({
  selector: 'app-leaves-page',
  templateUrl: './leaves-page.component.html',
  styleUrls: ['./leaves-page.component.scss']
})


export class LeavesPageComponent implements OnInit{


  // leaves: LeavesModel[] = [];
  // leave : LeavesModel = {
  //   "id": 0,
  //   "employee_no": 0,
  //   "totalDays": 0,
  //   "from_date": "",
  //   "to-date": "",
  //   "full": "",
  //   "half": "",
  //   "reason": "",
  //   "document": "",
  //   "status": ""
  // }
  // leaveslist : LeavesList

  // constructor(
  //   private store : Store<AppStateModel>,

  // ){}


  ngOnInit(): void {

  //   this.store.dispatch(loadLeaves());
  //   this.store.select(getLeaves).subscribe
  //   ((item : LeavesModel[])=>{
  //     this.leaveslist = {leavesList : item}

  //   })
  }

  

  // removeData(){

  // }


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
