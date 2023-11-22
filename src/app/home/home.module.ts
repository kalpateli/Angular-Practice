import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule {
  constructor(){
    console.log("Home Loaded");
  }
 }
