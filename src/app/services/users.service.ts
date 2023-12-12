import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../home/Users';
import { Observable , map , catchError , of  } from 'rxjs';
import { apiUrls } from '../apiUrls';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private isLoggedIn: boolean;
  baseurl="http://localhost:3000";

  constructor(private http:HttpClient) { 

    // this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  get():Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:3000/users")
  }


  postUsers(data: Users): Observable<boolean> {
    return this.http.post<Users[]>(this.baseurl + apiUrls.Users.user_details, data)
      .pipe(
        map((res) => {
          console.log(res);
          return true;
        }),
        catchError((error) => {
          console.error(error);
          return of(false); 
        })
      );
  }
  

  updateUser(data : Users) : Observable<Users[]>{
    return this.http.put<Users[]>(this.baseurl + apiUrls.Users.user_details + "/" + data.id, data);
    
  }


  // postUsers(data : Users) : Observable<boolean>{
  //   return this.http.post<Users[]>(this.baseurl + apiUrls.Users.user_details ,data)
  //   .subscribe((res)=>{
  //     console.log(res);
  //     alert("successfully created");
  //   })
  // }
  // getIsLoggedIn(): boolean {
  //   return this.isLoggedIn;
  // }


}
