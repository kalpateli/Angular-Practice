import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';
import { Users } from './Users';
import { AuthService } from '../shared/services/auth.service';


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
  userLoggedIn : any;
  msg : string = "Hello";
  userType : string ;

  users : Users[]=[];
  constructor(
    private router : Router,
    private route:ActivatedRoute, 
    private _users:UsersService,
    private _auth: AuthService
    ){}
    
    ngOnInit(): void {
     console.log(this.userType)
    this.getUsersApi();
    this.route.paramMap.subscribe(
      params => {
        // this.userId= parseInt(params.get('id'));
        this.userName= params.get('name');
        console.log("userName"+this.userName);
      }
    );
    this.userLoggedIn = this._auth.getUser();
    this.userType = this._auth.getUserType();

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
