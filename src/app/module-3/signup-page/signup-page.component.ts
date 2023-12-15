import { Component , inject , OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/home/Users';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { errorMessages } from '../../errrorMessages';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {



  isLoading: boolean = false;
  hide: boolean = true;
  successSignup: boolean = false;
  signupForm: FormGroup;
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
  male: string = "../../../assets/Profile_pics/default_man.jpg";
  female: string = "../../../assets/Profile_pics/default_woman.jpg"
  states: string[] = ['Goa', 'Gujarat', 'Banglore'];
  roles: string[] = ['admin', 'employee'];


  constructor(private fb: FormBuilder,
    private route: Router,
    private _users: UsersService,
    private snackBar: MatSnackBar
    ) {
    this.signupForm = this.fb.group({
      id: new FormControl(),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(errorMessages.pattern.mobile)]),
      gender: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^([\w+-.%]+@[\w-]+\.[A-Za-z]{2,})+$/)]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(errorMessages.pattern.password)]),
      userType: new FormControl('', [Validators.required]),
      profilePic: new FormControl('')
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000, // Duration in milliseconds
    });
  }
  
  signedupUser(signupForm: FormGroup) {
    this.isLoading = true;
    // console.log("signupForm.controls");
    // this.user.id = signupForm.get('id').value;
    this.user.firstName = signupForm.get('firstName').value;
    this.user.lastName = signupForm.get('lastName').value;
    this.user.phone = signupForm.get('phone').value;
    this.user.gender = signupForm.get('gender').value;
    this.user.state = signupForm.get('state').value;
    this.user.userName = signupForm.get('userName').value;
    this.user.email = signupForm.get('email').value;
    this.user.password = signupForm.get('password').value;
    this.user.userType = signupForm.get('userType').value;
    // this.user.profilePic = signupForm.get('profilePic').value;
    if (this.user.gender == "male") {
      // console.log(" is male? " + (this.user.gender == 'male'))
      this.user.profilePic = this.male;
    }
    else {
      this.user.profilePic = this.female;
    }


    // console.log(this.successSignup);

    this._users.postUsers(this.user)
      .subscribe((res) => {
        if (res) {
          this.successSignup = res;
          this.isLoading = false;
          this.openSnackBar('You are Signed Up successfully', 'OK');
          
          this.signupForm.reset();
          this.route.navigate(['/auth/log-in']);
        }
      },
        (err) => {
          this.isLoading = false;
          console.log(err)
        })


  }

  onReset() {
    this.signupForm.reset();
  }

  f(controlName: any) {
    if (controlName) {
      return this.signupForm.controls[controlName];
    }
    return null;
  }
}
