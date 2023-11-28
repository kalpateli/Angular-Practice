import { Component ,OnInit} from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Countries } from './Countries';

@Component({
  selector: 'app-module-2',
  templateUrl: './module-2.component.html',
  styleUrls: ['./module-2.component.scss']
})
export class Module2Component implements OnInit{

  countries : any[] =[];

  pageSize : number = 10;
  currentPage : number = 1;

  constructor(private _countries : CountriesService){
  }

  ngOnInit(): void {
    this.getCountryNames();
  }

  getCountryNames(){
    this._countries.getAllCountryNames()
    .subscribe((data:any)=>{

      // console.log(data);
      this.countries = data;
      console.log(this.countries);
    })
  }

  

}
