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


@NgModule({
  declarations: [
    SidenavComponent,
    EditUserDialogue,
    CommonSnackbar,
    SearchFilterPipePipe
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,

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
    MatSnackBarModule


  ]
})
export class SharedModule { }
