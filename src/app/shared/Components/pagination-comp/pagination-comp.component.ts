import { Component } from '@angular/core';
import { AppStateModel } from '../../store/Global/AppState.Model';
import { Store } from '@ngrx/store';
// import { selectPage, selectPageSize } from '../../store/pagination/pagination.selector';
// import * as PaginationActions from '../../store/pagination/pagination.action'


@Component({
  selector: 'app-pagination-comp',
  templateUrl: './pagination-comp.component.html',
  styleUrls: ['./pagination-comp.component.scss']
})
export class PaginationCompComponent {

  pageSize : number = 5;
  currentPage : number = 1;

  // totalItems = 200;
  // pageSizeOptions = [1, 5, 10];

  // pageSize$ = this.store.select(selectPageSize); // Make sure to use the correct selector

  // constructor(private store: Store) {}

  // onPageChange(event: any): void {
  //   this.store.dispatch(PaginationActions.setPage({ page: event.pageIndex + 1 }));
  //   this.store.dispatch(PaginationActions.setPageSize({ pageSize: event.pageSize }));
  //   // Fetch data based on the new page and page size using a service or other means
  // }


}
