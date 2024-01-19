import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { ClockComponent } from './Components/clock/clock.component';
import { PaginationCompComponent } from './Components/pagination-comp/pagination-comp.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EditUserDialogue } from './DialogueBox/edit-user-dialogue';
import { CommonSnackbar } from './DialogueBox/common_Snackbar';
import { EditEmployeeDialogue } from './DialogueBox/edit-employee-dialogue/edit-employee-dialogue';
import { AddEmployeeDialogue } from './DialogueBox/add-employee-dialogue/add-employee-dialogue';
import { AuthService } from './services/auth.service';
import { RxjsPracService } from './services/rxjs-prac.service';
import { UsersService } from './services/users.service';
import { SidenavService } from './services/sidenav.service';
import { LeavesService } from './services/leaves.service';
import { SearchFilterPipePipe } from './pipes/search-filter-pipe.pipe';
import { MarkingComponent } from './DialogueBox/marking/marking.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    EditUserDialogue,
    CommonSnackbar,
    SearchFilterPipePipe,
    EditEmployeeDialogue,
    AddEmployeeDialogue,
    ClockComponent,
    CalenderComponent,
    PaginationCompComponent,
    MarkingComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    RxjsPracService,
    UsersService,
    SidenavService,
    LeavesService
  ],
  exports: [
    SidenavComponent,
    PaginationCompComponent,
    MatSidenavModule,
    MatListModule,
    SearchFilterPipePipe,
    EditUserDialogue,
    CommonSnackbar,
    MatSnackBarModule,
    ClockComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
