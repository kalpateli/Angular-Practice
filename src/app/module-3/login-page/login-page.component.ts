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
  invalidField: string;
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

    if (this.user.userName == '' || this.user.password == '') {
      this.isNotvalid = false;
      this.isLoading = false;
      this.invalidField = "Both Fields are required !!";
    }
    else {
      this._users.get()
        .subscribe((res) => {
          this.users = (res.find((a: any) => {

            return (a.email === this.user.userName || a.userName === this.user.userName);

          }
          ))

          if (this.users) {
            if (this.users.password === this.user.password) {
              this.isNotvalid = false;
              this.isLoading = false;
              this.userType = this.users.userType == "admin" ? 'admin' : 'employee';
              this._auth.setUserType(this.userType);
              this._auth.setIsLoggedIn();
              this._auth.setUser(JSON.stringify(this.users));
              this.logInForm.reset();
              this.route.navigate(['/home', this.users.id, this.users.firstName], {
                queryParams: { userId: this.users.id, userName: this.users.firstName }
              });
              // this.route.navigate(['/home']);
            } else {
              this.isNotvalid = false;
              this.isLoading = false;
              this.invalidField = "Password Credential is Invalid !!";
            }
          }
          else {
            this.isNotvalid = false;
            this.isLoading = false;
            this.invalidField = "Email or Username Credential is Invalid !!";

          }
        },
          (err) => console.log(err)
        );
    }

  }



}






// this._users.get()
// .subscribe((res) => {
//   this.users = (res.find((a: any) => {
//     if (((a.email === this.user.userName || a.userName === this.user.userName) == false) && ((a.password === this.user.password) == true)) {
//       this.isNotvalid = false;
//       this.isLoading = false;
//       this.invalidField = "Email or Username Credential is Invalid !!";
//       return false;

//     }
//     else if (((a.email === this.user.userName || a.userName === this.user.userName)) && ((a.password === this.user.password) == false)) {
//       this.isNotvalid = false;
//       this.isLoading = false;
//       this.invalidField = "Password Credential is Invalid !!";
//       return false;
//     }
//     else {
//       if ((a.email === this.user.userName || a.userName === this.user.userName) && a.password === this.user.password) {
//         return true;
//       }
//       else {
//         this.isNotvalid = false;
//         this.isLoading = false;
//         this.invalidField = "The Credentials are Invalid !!";
//         return false;
//       }
//     }
//   }));
//   if (this.users) {
//     this.isLoading = false;
//     this.userType = (this.users.userType == "admin" ? 'admin' : 'employee')
//     this._auth.setUserType(this.userType);
//     this._auth.setIsLoggedIn();
//     this._auth.setUser(JSON.stringify(this.users))
//     this.logInForm.reset();
//     this.route.navigate(['/home', this.users.id, this.users.firstName],
//       { queryParams: { userId: this.users.id, userName: this.users.firstName } })
//   }


// },
//   (err) => console.log(err)
// )
// }
