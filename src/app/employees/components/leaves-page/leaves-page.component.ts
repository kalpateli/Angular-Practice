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


  ngOnInit(): void {
  }
}