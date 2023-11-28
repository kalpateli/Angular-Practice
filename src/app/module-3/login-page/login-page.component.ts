import { Component ,OnInit} from '@angular/core';
import { FormGroup , FormControl , FormBuilder , NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit{

  signinForm: FormGroup;
  firstName : string = "";
  lastName : string = "";
  email : string = "";
  password : string = "";

  constructor( private formBuilder : FormBuilder){
    this.signinForm = this.formBuilder.group({
      fname:new FormControl(),
      lname:new FormControl(),
      emailid:new FormControl(),
      userpassword:new FormControl(),


    });
  }  

  ngOnInit(){

  }

  PostData(signinForm : FormGroup){
    console.log(signinForm.controls);
    this.firstName = signinForm.get('fname').value;
    this.lastName = signinForm.get('lname').value;
    this.email = signinForm.get('emailid').value;
    this.password = signinForm.get('userpassword').value;
    console.log(this.firstName + " " + this.lastName + " " + this.email + " " + this.password);


  }

}
