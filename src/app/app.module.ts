import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { Module2Module } from './module-2/module-2.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { FooterComponent } from './shared/Components/footer/footer.component';
import { AboutUsComponent } from './shared/Components/about-us/about-us.component';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { Service1Service } from './home/services/service1.service';
import { Service2Service } from './home/services/service2.service';
import { CountriesService } from './module-2/services/countries.service';
import { UsersService } from './shared/services/users.service';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppState } from './shared/store/Global/App.state';
import { EmployeesEffects } from './shared/store/employee/employees.Effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LeavesEffects } from './shared/store/leaves/leaves.effects';
import { SharedModule } from './shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    PageNotFoundComponent,
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module2Module,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    NgxPaginationModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    SharedModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([EmployeesEffects,LeavesEffects])
  ],
  
  providers: [
    Service1Service,
    Service2Service,
    HttpClientModule,
    UsersService,
    CountriesService
  ],


  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { }
