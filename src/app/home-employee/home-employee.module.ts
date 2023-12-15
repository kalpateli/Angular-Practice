import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEmployeeRoutingModule } from './home-employee-routing.module';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';


@NgModule({
  declarations: [
    HomeEmployeeComponent
  ],
  imports: [
    CommonModule,
    HomeEmployeeRoutingModule
  ]
})
export class HomeEmployeeModule { }
