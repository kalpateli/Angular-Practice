import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../shared/services/sidenav.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  userName: string;
  id: number;


  constructor(
    private sidenavService: SidenavService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'));
      this.userName = params.get('name');
    })


    const adminNavList = [
      { name: 'Dashboard', path: '/home/dashboard' },
      { name: 'Employee List', path: '/home/employee-list' },
      { name: 'Attendance', path: '/home/employees-attendance' },
      { name: 'Leaves', path: '/home/employees-leaves' },
      { name: 'Summary', path: '/home/ngrx-prac' },
      { name: 'Organization', path: '/home/ngrx-prac' },
      { name: 'NGRX Practice', path: '/home/ngrx-prac' },
      { name: 'Rxjs Practice', path: '/home/rxjs-prac' },

    ];
    this.sidenavService.setNavList(adminNavList);
  }

  onNavigate() {
    this.router.navigate(['/home/dashboard']);
  }

}
