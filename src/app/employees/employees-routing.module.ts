import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmployeeComponent } from './components/home-employee/home-employee.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [

  { path: '', component: HomeEmployeeComponent },
  {
    path: ':id/:name', component: EmployeesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeEmployeeComponent },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
