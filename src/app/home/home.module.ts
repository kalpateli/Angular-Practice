import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { Section1Component } from '../admin/components/rxjs/section1.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HomeComponent,
    UserComponent,
    Section1Component
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
