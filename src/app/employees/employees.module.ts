import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import {HomeEmployeeComponent} from './components/home-employee/home-employee.component';
import { EmployeesComponent } from './employees.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeEmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
