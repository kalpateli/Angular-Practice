import { Component ,Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { SignupPageComponent } from 'src/app/module-3/signup-page/signup-page.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit{

  @Input() employee : any;
  @Input() Employee


  ngOnInit():void{
    
  }
}
