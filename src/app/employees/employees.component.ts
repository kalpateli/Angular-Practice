import { Component } from '@angular/core';
import { SidenavService } from '../shared/services/sidenav.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {


  userName : string;
  id : number;
  constructor(private sidenavService: SidenavService, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id= parseInt(params.get('id'));
      this.userName = params.get('name');
    })


    const adminNavList = [
      {name:'Dashboard', path:'/home/' + this.id + '/' + this.userName + '/dashboard'},

    ];
    this.sidenavService.setNavList(adminNavList);
  }

  
}
