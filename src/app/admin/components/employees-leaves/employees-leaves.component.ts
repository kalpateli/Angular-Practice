import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LeavesService } from 'src/app/shared/services/leaves.service';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { loadLeaves, updatedLeaves, deleteLeaves } from 'src/app/shared/store/leaves/leaves.action';
import { LeavesList, LeavesModel } from 'src/app/shared/store/leaves/leaves.model';
import { getLeaves, getLeavesPaginated } from 'src/app/shared/store/leaves/leaves.selectors';

@Component({
  selector: 'app-employees-leaves',
  templateUrl: './employees-leaves.component.html',
  styleUrls: ['./employees-leaves.component.scss']
})


export class EmployeesLeavesComponent implements OnInit {
  leaves: LeavesModel[] = [];
  leave: LeavesModel = {
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
  displayedColumns: string[] = ['Select', 'Id', 'Employee_no', 'Employee_fname', 'Employee_lname', 'from-Date', 'to-Date', 'full', 'half', 'reason', 'Status', 'action'];
  leaveslist: LeavesList = { leavesList: [] };
  leaveslist$: Observable<LeavesModel[]> | undefined;
  actioned: string = "pending";
  selection = new SelectionModel<LeavesModel>(true, []);
  selectedList: LeavesModel[];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  pageSize: number = 5


  constructor(
    private store: Store<AppStateModel>,
    private _leaves : LeavesService

  ) { }

  ngOnInit(): void {
    // this.store.get(this.currenpage, this.pageSize)
    // .subscribe({
    //   next: response => this.employeeLists = response,
    //   complete: () => this.toggleLoading()
    // });
    // this.store.dispatch(loadLeavesPaginated({ page: this.currentPage, pageSize: this.itemsPerPage }));

    this.store.dispatch(loadLeaves());

    this.store.select(getLeaves).subscribe(
      (item : LeavesModel[])=>
      {
        this.leaveslist = { leavesList: item };
      }
    )
   

    // this.store.select(getLeavesPaginated(this.currentPage, this.itemsPerPage)).subscribe((item: LeavesModel[]) => {
    //   this.leaveslist = { leavesList: item };
    //   console.log(item)
    // });

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.leaveslist?.leavesList?.length ?? 0;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.leaveslist.leavesList)
  }

  checkboxLabel(row?: LeavesModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }



  checkLeaves() {
    // this._employee.getEmployeeDetailsPaginated(this.currenpage, this.pageSize)
    //   .subscribe({
    //     next: response => this.employeeLists = response,
    //     complete: () => this.toggleLoading()
    //   });
    // this._leaves.getLeavesDetailsPaginated(this.currentPage, this.pageSize).subscribe(
    //   (res) =>
    //   {
    //     this.leaves = res
    //   }
    // )
    // return this.leaves;
    return this.leaveslist.leavesList;

  }

  removeData() {
    const selectedRows = this.selection.selected;
    if (selectedRows.length > 0) {
      this.selectedList = this.leaveslist.leavesList.filter(row => selectedRows.includes(row));
      this.selectedList.forEach(item => {
        this.store.dispatch(deleteLeaves({ id: item.id }))
      });
    }
  }

  action(leaveslist: LeavesModel, actionType: string) {

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
