import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from 'src/app/services/service1.service';
import { Service2Service } from 'src/app/services/service2.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  implements OnInit{

  userId : string;
  message : any;
  list2 : number[];

  constructor(
    private route:ActivatedRoute, 
    private service1: Service1Service, 
    private service2:Service2Service
    ){}

  ngOnInit(){
    //this. route gives a snapshot of the current route therefor snapshot method is used
    // from the snapshot we use paramMap to get the parameter from the url
    // let id : number = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.userId = id;

    this.route.paramMap.subscribe(
      params => {
        // this.userId= parseInt(params.get('id'));
        this.userId= params.get('name');

      }
    );

    this.message = this.service1.getMessage();
    this.list2=this.service2.showList();

  }


  addNumber2(val : number){
    this.service2.addNumber(val);
    this.list2=this.service2.showList();

  }
}
