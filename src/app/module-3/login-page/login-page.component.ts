import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/home/Users';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  isLoading: boolean = false;
  hide: boolean = true;
  userType: string;
  isNotvalid: boolean = true;
  logInForm: FormGroup;
  users: any = {};
  user: Users = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "phone": "",
    "gender": "",
    "state": "",
    "userName": "",
    "email": "",
    "password": "",
    "userType": "",
    "profilePic": ""
  }

  constructor(private fb: FormBuilder,
    private route: Router,
    private _users: UsersService,
    private _auth: AuthService) {
    this.logInForm = this.fb.group({
      id: new FormControl(),
      nameEmail: new FormControl('', [Validators.required]),
      // emailid: new FormControl(),
      userpassword: new FormControl('', [Validators.required])
      // userType: new FormControl()
    });
  }

  ngOnInit() {

  }

  loggedInUser(logInForm: FormGroup) {
    this.isLoading = true;

    console.log(logInForm.controls);
    // this.user.userName = logInForm.get('username').value;
    this.user.userName = logInForm.get('nameEmail').value;
    this.user.password = logInForm.get('userpassword').value;
    console.log(this.user.userName + " " + this.user.email + " " + this.user.password);


    this._users.get()
      .subscribe((res) => {
        this.users = (res.find((a: any) => {
          return (a.email === this.user.userName || a.userName === this.user.userName) && a.password === this.user.password;
        }));
        if (this.users) {
          this.isLoading = false;

          this.userType = (this.users.userType == "admin" ? 'admin' : 'employee')
          this._auth.setUserType(this.userType);
          // localStorage.setItem('isLoggedIn', 'true');
          this._auth.setIsLoggedIn();
          this._auth.setUser(JSON.stringify(this.users))
          // localStorage.setItem('userData', JSON.stringify(this.users));

          this.logInForm.reset();
          this.route.navigate(['/home', this.users.id, this.users.firstName],
            { queryParams: { userId: this.users.id, userName: this.users.firstName } })
        }
        else {
          // localStorage.setItem('isLoggedIn', "false");
          this.isNotvalid = false;
          this.isLoading = false;
        }

      },
        (err) => console.log(err)
      )



  }
}
