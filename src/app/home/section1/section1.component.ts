import { Component, Input , OnInit , OnChanges, ViewChild ,ElementRef, AfterViewInit} from '@angular/core';
import { 
  Subscription, 
  fromEvent, 
  interval, 
  of, 
  toArray, 
  take,
  from } from 'rxjs';
import { RxjsPracService } from 'src/app/services/rxjs-prac.service';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit, AfterViewInit{

  @Input() message : string ; 

  //form Event
  @ViewChild('addBtn') addBtn: ElementRef;


  constructor(private _rxjsPrac : RxjsPracService){

  }


  // fruits : string[] =["Apple","banana","Kiwi"]
  
  sourceSub : Subscription;
  users:any[]=[
    {name: "abc" , skill:'Angular'},
    {name: "abc" , skill:'Angular'},
    {name: "abc" , skill:'Angular'}

  ]
  
  ngOnChanges(){
    console.log("section 1 : changed")
  }
  
  ngOnInit() : void {
    //toArray (Example 01)
    const source =interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray())
    .subscribe((res)=>{
      console.log(res);

      // if(res >= 8)
      // {
      //   this.sourceSub.unsubscribe();
      // }
    })

    //toArray (Example 02)
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res)=>{
      console.log(res);
    })

    
    //toArray (Example 03)
    const source3 = of("Apple","banana","Kiwi");
    source3.pipe(toArray()).subscribe((res)=>{
      console.log(res);
    })
    
    //of()
    const fruits = of("Apple","banana","Kiwi");
    
    fruits.subscribe((res)=>{console.log(res)})
  }
  // fromEvent(button,'click')
  
  ngAfterViewInit(){
    let count=1;
    fromEvent(this.addBtn.nativeElement,'click')
    .subscribe((res)=>{
      console.log(res);
      let countval= 'add '+ count++;
      this._rxjsPrac.printEl(countval,'elContainer1');
      this._rxjsPrac.printEl(countval,'elContainer2');

    })
  }

  // printEl(count : any, elContainer : string){
  //   let el=document.createElement('li');
  //   el.innerText=count;

  //   document.getElementById(elContainer).appendChild(el);

  // }
}
