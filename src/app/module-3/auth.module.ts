import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Module3RoutingModule } from './module-3-routing.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Module3Component } from './module-3.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersService } from '../shared/services/users.service';


@NgModule({
  declarations: [
    SignupPageComponent,
    LoginPageComponent,
    Module3Component,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    Module3RoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule

  ],
  providers:[
    UsersService
  ]
})
export class Module3Module { 
  constructor(){
    console.log("module-3 loaded");
  }
}
