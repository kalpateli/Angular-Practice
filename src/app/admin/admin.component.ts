import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/services/sidenav.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})



export class AdminComponent implements OnInit{

  userName : string;
  id : number;
  constructor(private sidenavService: SidenavService, private route : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id= parseInt(params.get('id'));
      this.userName = params.get('name');
      console.log("userName" + this.userName);
    })


    const adminNavList = [
      {name:'Dashboard', path:'/home/' + this.id + '/' + this.userName + '/dashboard'},
      {name:'Employee List', path:'/home/' + this.id + '/' + this.userName + '/employee-list'},
      {name:'Attendance', path:'/home/' + this.id + '/' + this.userName + '/employees-attendance'},
      {name:'Leaves', path:'/home/' + this.id + '/' + this.userName + '/employees-leaves'},
      {name:'Summary', path:'/home/' + this.id + '/' + this.userName + '/ngrx-prac'},
      {name:'Organization', path:'/home/' + this.id + '/' + this.userName + '/ngrx-prac'},
      {name:'NGRX Practice', path:'/home/' + this.id + '/' + this.userName + '/ngrx-prac'},



    ];
    this.sidenavService.setNavList(adminNavList);
  }

  onNavigate(){
    console.log("onNavigate clicked")
    this.router.navigate(['/home' , this.id , this.userName ,'dashboard' ]);
  }

}
