import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesService } from './services/employees.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NGRXpracticeComponent } from './components/ngrxpractice/ngrxpractice.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EmployeesAttendanceComponent } from './components/employees-attendance/employees-attendance.component';
import { EmployeesLeavesComponent } from './components/employees-leaves/employees-leaves.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    EmployeeListComponent,
    UserDetailsComponent,
    NGRXpracticeComponent,
    EmployeesAttendanceComponent,
    EmployeesLeavesComponent,
    SummaryComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    AdminRoutingModule,
    MatListModule,
    MatSidenavModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    MatIconModule,
  ],
  providers:[
    EmployeesService,
  ]
})


export class AdminModule { }
