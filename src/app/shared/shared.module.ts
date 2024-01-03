import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './services/auth.service';
import { RxjsPracService } from './services/rxjs-prac.service';
import { UsersService } from './services/users.service';
import { SidenavService } from './services/sidenav.service';
import { RouterModule } from '@angular/router';
import { SearchFilterPipePipe } from './pipes/search-filter-pipe.pipe';
import { EditUserDialogue } from './DialogueBox/edit-user-dialogue';
import { CommonSnackbar } from './DialogueBox/common_Snackbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeDialogue } from './DialogueBox/add-employee-dialogue/add-employee-dialogue';
import { ClockComponent } from './Components/clock/clock.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { PaginationCompComponent } from './Components/pagination-comp/pagination-comp.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditEmployeeDialogue } from './DialogueBox/edit-employee-dialogue/edit-employee-dialogue';

@NgModule({
  declarations: [
    SidenavComponent,
    EditUserDialogue,
    CommonSnackbar,
    SearchFilterPipePipe,
    EditEmployeeDialogue,
    AddEmployeeDialogue,
    ClockComponent,
    CalenderComponent,
    PaginationCompComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers:[
    AuthService,
    RxjsPracService,
    UsersService,
    SidenavService
  ],
  exports :[
    SidenavComponent,
    PaginationCompComponent,
    MatSidenavModule,
    MatListModule,
    SearchFilterPipePipe,
    EditUserDialogue,
    CommonSnackbar,
    MatSnackBarModule,
    ClockComponent,
  ]
})
export class SharedModule { }
