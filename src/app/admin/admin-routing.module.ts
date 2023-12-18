import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component'
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path : ':id/:name', component : AdminComponent},
  {path : 'dashBoard', component: HomeAdminComponent,},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
