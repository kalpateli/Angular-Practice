import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmployeeComponent } from './components/home-employee/home-employee.component';
import { EmployeesComponent } from './employees.component';
import { LeavesPageComponent } from './components/leaves-page/leaves-page.component';

const routes: Routes = [

  {
    path: '', component: EmployeesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: HomeEmployeeComponent,},
      {path: 'leaves', component: LeavesPageComponent,},
     
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
