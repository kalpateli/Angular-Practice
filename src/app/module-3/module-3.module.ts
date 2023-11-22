import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module-3-routing.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Module3Component } from './module-3.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SignupPageComponent,
    LoginPageComponent,
    Module3Component
  ],
  imports: [
    CommonModule,
    Module3RoutingModule,
    RouterModule
  ]
})
export class Module3Module { 
  constructor(){
    console.log("module-3 loaded");
  }
}