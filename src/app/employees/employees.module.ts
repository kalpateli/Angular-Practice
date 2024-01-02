import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import {HomeEmployeeComponent} from './components/home-employee/home-employee.component';
import { EmployeesComponent } from './employees.component'
import { SharedModule } from '../shared/shared.module';
import { AttendancePageComponent } from './components/attendance-page/attendance-page.component';
import { LeavesPageComponent } from './components/leaves-page/leaves-page.component';

@NgModule({
  declarations: [
    HomeEmployeeComponent,
    EmployeesComponent,
    AttendancePageComponent,
    LeavesPageComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
