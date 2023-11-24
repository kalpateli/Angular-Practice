import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../home/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 

  }

  get():Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:3000/users")
  }

}
