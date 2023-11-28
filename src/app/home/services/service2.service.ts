import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../List';

@Injectable({
  providedIn: 'root'
})


export class Service2Service {

  listNum : number[] =[101];

  constructor(private http:HttpClient) {}

    getListItems() : Observable<List[]>{
      return this.http.get<List[]>("http://localhost:3000/List");
    }


    getAnotherMessage(): string {
      return "Hii";
    }

    addNumber(num:number){
      this.listNum.push(num);
    }

    showList(){
      return this.listNum;
    }

    // postData(data: any): Observable<List[]> {
    //   return this.http.post<List[]>('http://localhost:3000/List', data);
    // }
   
}
