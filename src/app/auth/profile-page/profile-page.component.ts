import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogue } from 'src/app/shared/DialogueBox/edit-user-dialogue';
import { errorMessages } from 'src/app/errrorMessages';
import { Users } from 'src/app/home/Users';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})


export class ProfilePageComponent {


  isReadOnly = true;
  profilechanged = false;
  edited: boolean = false;
  isLoading: boolean = false;
  loggedUser: FormGroup;
  currUser: any;
  states: string[] = ['Goa', 'Gujarat', 'Banglore'];
  roles: string[] = ['admin', 'employee'];
  hide: boolean = true;
  user: Users = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "phone": "",
    "gender": "",
    "state": "",
    "userName": "",
    "email": "",
    "employee_no":"",
    "password": "",
    "userType": "",
    "profilePic": ""
  }
  // basePath: string = "../../../../documents/ProfilePics/"
  basePath: string = "../../../assets/Profile_pics/"

  profileImage: string;


  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    public dialog: MatDialog,
    private _auth: AuthService) {
    this.currUser = _auth.getUser();
    this.profileImage = this.currUser.profilePic;
    this.loggedUser = this.fb.group({
      id: new FormControl(this.currUser.id),
      firstName: new FormControl(this.currUser.firstName, [Validators.required]),
      lastName: new FormControl(this.currUser.lastName, [Validators.required]),
      phone: new FormControl(this.currUser.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(errorMessages.pattern.mobile)]),
      gender: new FormControl(this.currUser.gender, [Validators.required]),
      state: new FormControl(this.currUser.state, [Validators.required]),
      email: new FormControl(this.currUser.email, [Validators.required, Validators.pattern(/^([\w+-.%]+@[\w-]+\.[A-Za-z]{2,})+$/)]),
      userName: new FormControl(this.currUser.userName, [Validators.required]),
      password: new FormControl(this.currUser.password, [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(errorMessages.pattern.password)]),
      userType: new FormControl(this.currUser.userType, [Validators.required]),
      profilePic: new FormControl(this.currUser.profilePic)


    })
  }


  // if ('indexedDB' in window) {

  //   console.log('IndexedDB is  supported in this browser.');

  // } else {
  //   console.log('IndexedDB is not supported in this browser.');
  // }




  updateUser(loggedUser: FormGroup) {

    // this.user.id = loggedUser.get('id').value;
    // this.user.firstName = loggedUser.get('firstName').value;
    // this.user.lastName = loggedUser.get('lastName').value;
    // this.user.phone = loggedUser.get('phone').value;
    // this.user.gender = loggedUser.get('gender').value;
    // this.user.state = loggedUser.get('state').value;
    // this.user.userName = loggedUser.get('userName').value;
    // this.user.email = loggedUser.get('email').value;
    // this.user.password = loggedUser.get('password').value;
    // this.user.userType = loggedUser.get('userType').value;
    // this.user.profilePic = loggedUser.get('profilePic').value;

    this.user = { ...loggedUser.value };


    this.dialog.open(EditUserDialogue, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      if (result) {
        this.isLoading = true;

        console.log('User clicked "Ok"');
        this._usersService.updateUser(this.user)
          .subscribe((res) => {
            if (res) {
              console.log(res);
              this.edited = !this.edited;
              this._auth.setUser(JSON.stringify(res))
              this._auth.setUserType(this.user.userType)
              this.isLoading = false;


            }
          });
      } else {
        console.log('clicked cancel');
      }
    });



  }

  onReset() {
    this.loggedUser.reset();
    this.profileImage = this.user.profilePic;
    this.profilechanged = false;
  }

  onUploadProfile(e) {
    this.isLoading = true;


    if (e.target.files) {
      var reader = new FileReader();
      const file = e.target.files[0];

      const fileName = file.name;
      reader.readAsDataURL(file);
      const imagePath = this.basePath + fileName

      reader.onload = (event: any) => {
        // this.profileImage = event.target.result;
        this.profileImage = imagePath;

        this.profilechanged = true;
        this.isLoading = false;
      }
    }
  }



  saveProfile() {
    this.isLoading = true;

    this.user = {...this.currUser};
    // this.user.id = this.currUser.id;
    // this.user.firstName = this.currUser.firstName;
    // this.user.lastName = this.currUser.lastName;
    // this.user.phone = this.currUser.phone;
    // this.user.gender = this.currUser.gender;
    // this.user.state = this.currUser.state;
    // this.user.userName = this.currUser.userName;
    // this.user.email = this.currUser.email;
    // this.user.password = this.currUser.password;
    // this.user.userType = this.currUser.userType;
    this.user.profilePic = this.profileImage;

    console.log(this.user.firstName)
    // this.updateUser()
    this._usersService.updateUser(this.user)
      .subscribe((res) => {
        if (res) {

          this._auth.setUser(JSON.stringify(res))

          this.profilechanged = false;
          this.isLoading = false;

        }
      });
  }
}


//Use Smaller Images:

// If possible, resize or compress the images before storing them. You can use client-side libraries or tools to achieve this.
// Store References, Not Images:

// Instead of storing the image data directly, store a reference or path to the image. The actual image file can be stored on the server or locally on the client's device.
// Client-Side File Storage:

// Consider using the client-side File System API or IndexedDB for more efficient and larger-scale storage.