import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Module2Module } from './module-2/module-2.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Service1Service } from './home/services/service1.service';
import { Service2Service } from './home/services/service2.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './module-2/services/countries.service';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SearchFilterPipePipe } from './pipes/search-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    SearchFilterPipePipe,
    
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module2Module,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  
  providers: [Service1Service,
              Service2Service,
              HttpClientModule,
              UsersService,
              CountriesService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
