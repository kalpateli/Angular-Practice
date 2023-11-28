import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module-2-routing.module';
import { Module2Component } from './module-2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    Module2Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    BrowserModule,
    NgxPaginationModule

  ],
  providers:[
  ]
})
export class Module2Module { }
