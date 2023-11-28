import { Component, Input , OnInit , OnChanges, ViewChild ,ElementRef, AfterViewInit} from '@angular/core';
import { fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit, AfterViewInit{

  @Input() message : string ; 

  //form Event
  @ViewChild('addBtn') addBtn: ElementRef;



  // fruits : string[] =["Apple","banana","Kiwi"]
  
  
  ngOnChanges(){
    console.log("section 1 : changed")
  }
  
  ngOnInit() : void {
    
    
    

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
      this.printEl(countval,'elContainer1');
      this.printEl(countval,'elContainer2');

    })
  }

  printEl(count : any, elContainer : string){
    let el=document.createElement('li');
    el.innerText=count;

    document.getElementById(elContainer).appendChild(el);

  }
}
