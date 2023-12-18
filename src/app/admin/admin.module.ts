import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AdminComponent } from './admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    HomeAdminComponent,
    AdminComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatListModule

  ]
})


export class AdminModule { }
