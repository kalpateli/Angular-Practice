import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from 'src/app/home/services/service1.service';
import { Service2Service } from 'src/app/home/services/service2.service';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from 'src/app/shared/store/employee/employees.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: string;
  message: any;
  list2: number[];
  emp: EmployeeModel;

  constructor(
    private route: ActivatedRoute,
    private service1: Service1Service,
    private service2: Service2Service,
    private _employee: EmployeesService
  ) { }

  ngOnInit() {
    //this. route gives a snapshot of the current route therefor snapshot method is used
    // from the snapshot we use paramMap to get the parameter from the url
    // let id : number = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.userId = id;

    this.route.paramMap.subscribe(
      params => {
        // this.userId= parseInt(params.get('id'));
        this.userId = params.get('id');
      }
    );

    this._employee.getEmployeeDetails()
      .subscribe(
        (res) => {
          this.emp = (res.find((a: any) => {
            return (a.id == this.userId);

          }
          ))
        })
  }

}
