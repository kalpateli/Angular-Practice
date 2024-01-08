import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import {HomeEmployeeComponent} from './components/home-employee/home-employee.component';
import { EmployeesComponent } from './employees.component'
import { SharedModule } from '../shared/shared.module';
import { AttendancePageComponent } from './components/attendance-page/attendance-page.component';
import { LeavesPageComponent } from './components/leaves-page/leaves-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EmployeesComponent,
    HomeEmployeeComponent,
    AttendancePageComponent,
    LeavesPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeesRoutingModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class EmployeesModule { }
