import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component'
import { AdminComponent } from './admin.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NGRXpracticeComponent } from './components/ngrxpractice/ngrxpractice.component';
import { EmployeesAttendanceComponent } from './components/employees-attendance/employees-attendance.component';
import { EmployeesLeavesComponent } from './components/employees-leaves/employees-leaves.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', component: HomeAdminComponent,
      },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employees-attendance', component: EmployeesAttendanceComponent },
      { path: 'employees-leaves', component: EmployeesLeavesComponent },

      { path: 'ngrx-prac', component:  NGRXpracticeComponent},
      { path: 'user/:id/:name', component: UserDetailsComponent },


    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
