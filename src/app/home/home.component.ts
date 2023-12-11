import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Users } from './Users';


interface Data{
  id:number;
  firstName:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  
  userName : string
  userLoggedIn = JSON.parse(localStorage.getItem('userData'));
  msg : string = "Hello";
  
  users : Users[]=[];
  constructor(
    private router : Router,
    private route:ActivatedRoute, 
    private _users:UsersService
    ){}
    
    ngOnInit(): void {
    this.getUsersApi();
    this.route.paramMap.subscribe(
      params => {
        // this.userId= parseInt(params.get('id'));
        this.userName= params.get('name');
        console.log("userName"+this.userName)
      }
    );
  }

  getUsersApi(){
    this._users.get()
    .subscribe((data)=>{
      console.log(data);
      this.users=data;
    })
  }



  onSelect(user : Data){
    this.router.navigate(['/home/homepage',user.id,user.firstName],
    {queryParams:{page: user.id ,search: user.firstName}})
  }

 
  
}
