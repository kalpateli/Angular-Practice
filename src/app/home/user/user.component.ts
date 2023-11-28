import { Component ,Input,OnInit } from '@angular/core';
import { Service2Service } from 'src/app/services/service2.service';
import { List } from '../List';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{



  list : number[] ;
  listItems : List[]=[] ;
  items : any;

  constructor(private _service2:Service2Service, private http : HttpClient){}
  

  addListItem  = [];

  ngOnInit() : void{
    this.list=this._service2.showList();
    this.displayListitems();
  }

  addNumber(val:number){
    this._service2.addNumber(val);
    this.list=this._service2.showList();
  }

  displayListitems(){
    this._service2.getListItems()
    .subscribe((response)=>{
      this.listItems=response;
    })
  }

  // onAddClick(lists: {id:number}){
  //   this.http.post('http://localhost:3000/List',lists)
  //   .subscribe((data)=>{
  //     console.log(data)
  //     this.items=data;
  //   })
  // }


  // onAddClick(lists: {id:number}) {
  //   this._service2.postData(lists)
  //   .subscribe((response) => {
  //       console.log('Data posted successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error posting data:', error);
  //     }
  //   );
  // }
  
}
