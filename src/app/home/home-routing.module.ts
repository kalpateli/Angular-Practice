import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  
  {path : ':id/:name', component: HomeComponent,},
  {path : 'homepage/:id/:name', component: HomepageComponent,},
  {path : 'users/:id/:name', component: UserComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
