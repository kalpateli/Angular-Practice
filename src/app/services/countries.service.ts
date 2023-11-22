import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from '../module-2/Countries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http : HttpClient) { }

  baseUrl: string ="https://restcountries.com/v3.1/";


  getAllCountryNames():Observable<Countries[]>{
    return this.http.get<Countries[]>(this.baseUrl + "all");
    
  }
}
