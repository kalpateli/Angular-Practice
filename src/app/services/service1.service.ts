import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service'; 


@Injectable({
  providedIn: 'root'
})



export class Service1Service {

  constructor() { }

  getMessage() : string{
    return "Hello";
  }



}
