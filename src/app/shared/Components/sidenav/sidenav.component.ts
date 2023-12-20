import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{


  navList: any[] = [];

  constructor(private sidenavService: SidenavService,private router : Router) {}

  ngOnInit(): void {
    this.sidenavService.getNavList().subscribe((navList) => {
      this.navList = navList;
    });
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }


 
}
