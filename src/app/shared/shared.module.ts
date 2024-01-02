import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatSidenav } from '@angular/material/sidenav';
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
import { EditEmployeeDialogue } from './DialogueBox/edit-employe-idalogue/edit-employee-dialogue';
import { AddEmployeeDialogue } from './DialogueBox/add-employee-dialogue/add-employee-dialogue';
import { ClockComponent } from './Components/clock/clock.component';
import { CalenderComponent } from './Components/calender/calender.component';

@NgModule({
  declarations: [
    SidenavComponent,
    EditUserDialogue,
    CommonSnackbar,
    SearchFilterPipePipe,
    EditEmployeeDialogue,
    AddEmployeeDialogue,
    ClockComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    AuthService,
    RxjsPracService,
    UsersService,
    SidenavService
  ],
  exports :[
    SidenavComponent,
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
