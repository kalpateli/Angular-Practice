import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


interface Data{
  id:number;
  name:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  users : Data[]=[];
  constructor(private router : Router,private _users:UsersService){

  }
  ngOnInit(): void {
    this.getUsersApi();
  }

  getUsersApi(){
    this._users.get()
    .subscribe((data)=>{
      console.log(data);
      this.users=data;
    })
  }



  onSelect(user : Data){
    this.router.navigate(['/home',user.id,user.name],{queryParams:{page: user.id ,search: user.name}})
  }

 
  
}
