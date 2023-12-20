import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '../shared/Components/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesService } from './services/employees.service';

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    EmployeeListComponent,
    
    // SidenavComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    AdminRoutingModule,
    MatListModule,
    MatSidenavModule,
    SharedModule

  ],
  providers:[
    EmployeesService,
  ]
})


export class AdminModule { }
