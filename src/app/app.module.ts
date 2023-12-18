import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { AboutUsComponent } from './shared/Components/about-us/about-us.component';
import { Module2Module } from './module-2/module-2.module';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { Service1Service } from './home/services/service1.service';
import { Service2Service } from './home/services/service2.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './module-2/services/countries.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { SearchFilterPipePipe } from './pipes/search-filter-pipe.pipe';
import { UsersService } from './shared/services/users.service';
// import {
//   MatDialog,
//   MatDialogRef,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogTitle,
//   MatDialogContent,
// } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { EditUserDialogue } from './DialogueBox/edit-user-dialogue';
import {CommonSnackbar} from './DialogueBox/common_Snackbar'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    UsersComponent,
    SearchFilterPipePipe,
    EditUserDialogue,
    CommonSnackbar,
    UsersComponent
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
    // MatDialogRef,
    // MatDialogActions,
    // MatDialogClose,
    // MatDialogTitle,
    // MatDialogContent,
    MatButtonModule,
    MatSnackBarModule
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
