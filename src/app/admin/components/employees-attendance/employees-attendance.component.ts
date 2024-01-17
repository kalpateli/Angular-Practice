import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AttendenceService } from 'src/app/shared/services/attendence.service';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { AttendenceModel } from 'src/app/shared/store/attendence/attendence.model';
import { loadEmployee } from 'src/app/shared/store/employee/employees.actions';
import { EmployeeModel } from 'src/app/shared/store/employee/employees.model';
import { getEmployee } from 'src/app/shared/store/employee/employees.selectors';


@Component({
  selector: 'app-employees-attendance',
  templateUrl: './employees-attendance.component.html',
  styleUrls: ['./employees-attendance.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class EmployeesAttendanceComponent implements OnInit {

  attendanceList: AttendenceModel[] = [];
  employees: EmployeeModel[] = [];
  empLength: number;
  single: any[];
  view: any[] = [500, 500];
  today_date: string;
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = {
      domain: ['red', 'blue']
    };
  displayedColumns: string[] = ['Id', 'Employee_no'];
  chartData: { name: string; value: number; }[];


  constructor(
    private store: Store<AppStateModel>,
    private attendance: AttendenceService,
  ) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(loadEmployee())
    this.store.select(getEmployee).subscribe(
      (item: EmployeeModel[]) => {
        this.empLength = item.length;
        console.log(this.empLength)
      }
    )
    this.getAttendance();
  }

  getAttendance() {
    this.attendance.getAttendanceDetails().subscribe(
      (res) => {
        console.log("length"+[res])
        this.attendanceList = [res[res.length - 1]];
        console.log(this.attendanceList)
        this.today_date = this.attendanceList[0].date;
        this.prepareChartData();
      }
    )

  }

  prepareChartData() {
    const absLen = this.attendanceList[0].absentees.length
    console.log(absLen);
    const presentees = this.empLength - absLen;
    console.log(presentees);
    this.chartData = [
          {
            name: 'Absentees',
            value: absLen || 0
          },
          {
            name: 'Presentees',
            value: presentees
          }
        ];
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}