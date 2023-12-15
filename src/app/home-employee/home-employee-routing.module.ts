import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';

const routes: Routes = [

  {path:'',component:HomeEmployeeComponent},
  {path : ':id/:name', component: HomeEmployeeComponent,},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeEmployeeRoutingModule { }
