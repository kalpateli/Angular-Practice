import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Module3RoutingModule } from './auth-routing.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthComponent } from './auth.component';
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
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignupPageComponent,
    LoginPageComponent,
    AuthComponent,
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
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    SharedModule,

  ],
  providers:[
    UsersService
  ]
})
export class AuthModule { 
  constructor(){
    console.log("Auth Module loaded");
  }
}
