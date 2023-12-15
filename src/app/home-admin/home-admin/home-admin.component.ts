import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/home/Users';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface Data {
  id: number;
  firstName: string;
}
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})


export class HomeAdminComponent {
  userName: string
  userLoggedIn: any;
  users: Users[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _users: UsersService,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
    this.getUsersApi();
    this.route.paramMap.subscribe(
      params => {
        // this.userId= parseInt(params.get('id'));
        this.userName = params.get('name');
        console.log("userName" + this.userName);
      }
    );
    this.userLoggedIn = this._auth.getUser();

  }

  getUsersApi() {
    this._users.get()
      .subscribe((data) => {
        console.log(data);
        this.users = data;
      })
  }



  onSelect(user: Data) {
    // this.router.navigate(['/home/homepage', user.id, user.firstName],
    //   { queryParams: { page: user.id, search: user.firstName } })
  }

}
