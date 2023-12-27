import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Module2Module } from './module-2/module-2.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { AboutUsComponent } from './shared/Components/about-us/about-us.component';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { Service1Service } from './home/services/service1.service';
import { Service2Service } from './home/services/service2.service';
import { CountriesService } from './module-2/services/countries.service';
import { UsersService } from './shared/services/users.service';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    StoreModule.forRoot({counter : counterReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
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
