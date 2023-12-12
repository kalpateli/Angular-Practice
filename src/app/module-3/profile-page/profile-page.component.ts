import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogue } from 'src/app/DialogueBox/edit-user-dialogue';
import { errorMessages } from 'src/app/errrorMessages';
import { Users } from 'src/app/home/Users';
import { UsersService } from 'src/app/services/users.service';

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
  currUser = JSON.parse(localStorage.getItem('userData'));
  saveEdit = false;
  states: string[] = ['Goa', 'Gujarat', 'Banglore'];
  roles: string[] = ['admin', 'employee'];
  hide: boolean = true;
  user: Users = {
    "id": this.currUser.id,
    "firstName": this.currUser.firstName,
    "lastName": this.currUser.lastName,
    "phone": this.currUser.phone,
    "gender": this.currUser.gender,
    "state": this.currUser.state,
    "userName": this.currUser.userName,
    "email": this.currUser.email,
    "password": this.currUser.password,
    "userType": this.currUser.userType,
    "profilePic" : this.currUser.profilePic
  }
  profileImage : string = this.user.profilePic;


  constructor(private fb: FormBuilder, private _usersService: UsersService, public dialog: MatDialog) {
    console.log(this.currUser.userType)
    this.loggedUser = this.fb.group({
      id: new FormControl(this.user.id),
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      phone: new FormControl(this.user.phone, [Validators.required]),
      gender: new FormControl(this.user.gender, [Validators.required]),
      state: new FormControl(this.user.state, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.pattern(/^([\w+-.%]+@[\w-]+\.[A-Za-z]{2,})+$/)]),
      userName: new FormControl(this.user.userName, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(8), Validators.maxLength(18), Validators.pattern(errorMessages.pattern.password)]),
      userType: new FormControl(this.user.userType, [Validators.required]),
      profilePic: new FormControl(this.user.profilePic)


    })

    if ('indexedDB' in window) {
    
      console.log('IndexedDB is  supported in this browser.');

    } else {
      console.log('IndexedDB is not supported in this browser.');
    }
  }




  updateUser(loggedUser: FormGroup) {
    this.user.firstName = loggedUser.get('firstName').value;
    this.user.lastName = loggedUser.get('lastName').value;
    this.user.phone = loggedUser.get('phone').value;
    this.user.gender = loggedUser.get('gender').value;
    this.user.state = loggedUser.get('state').value;
    this.user.userName = loggedUser.get('userName').value;
    this.user.email = loggedUser.get('email').value;
    this.user.password = loggedUser.get('password').value;
    this.user.userType = loggedUser.get('userType').value;

    console.log('');
    this.dialog.open(EditUserDialogue, {
      width: '250px',
    }).afterClosed().subscribe(result => {
      if (result) {
        console.log('User clicked "Ok"');
        this.saveEdit = true;
      } else {
        console.log('User clicked "No" or closed the dialog without taking any action');
        this.saveEdit = false;
      }
    });


    if (this.saveEdit == true) {
      this._usersService.updateUser(this.user)
        .subscribe((res) => {
          if (res) {
            this.edited = !this.edited;
            localStorage.setItem('userData', JSON.stringify(res));

          }
        });
    }
  }

  onReset() {
    this.isLoading=true;
    this.loggedUser.reset();
    this.profileImage = this.user.profilePic;
    this.profilechanged = false;
    this.isLoading=false;



  }

  basePath : string = "../../../assets/Profile_pics/"
  onUploadProfile(e){
    this.isLoading=true;
    
    if(e.target.files){
      var reader = new FileReader();
      const file =e.target.files[0];

      const fileName = file.name;
      reader.readAsDataURL(file);
      const imagePath = this.basePath + fileName
      
      reader.onload = (event : any) => {
        // this.profileImage = event.target.result;
        this.profileImage = imagePath;

        localStorage.setItem('profilePic', imagePath);
        this.profilechanged = true;
        this.isLoading=false;

      }
    }
  }


  saveProfile(){
    this.isLoading=true;

    this.user.profilePic = this.profileImage;
    this._usersService.updateUser(this.user)
        .subscribe((res) => {
          if (res) {
            localStorage.setItem('userData', JSON.stringify(res));
            this.profilechanged = false;
            this.isLoading=false;

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