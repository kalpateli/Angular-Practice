import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { customIncrement, decrement, increment, reset , rename } from 'src/app/shared/store/counter/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter/counter.model';
import { getCounter } from 'src/app/shared/store/counter/counter.selector';


@Component({
  selector: 'app-ngrxpractice',
  templateUrl: './ngrxpractice.component.html',
  styleUrls: ['./ngrxpractice.component.scss']
})
export class NGRXpracticeComponent implements OnInit, OnDestroy{


  constructor(
    private store : Store<{counter : CounterModel,page:CounterModel}>
  ){

  }

  counterInp : number;
  actionType : string  = 'add';
  counterDisplay : number ;
  pageName : string;
  counterSubscribe : Subscription;
  counter$ : Observable<CounterModel>;

  ngOnDestroy(): void {
    if(this.counterSubscribe){
      this.counterSubscribe.unsubscribe();
    }
  }

  ngOnInit():void{
    this.counterSubscribe=this.store.select('counter').subscribe(data=>{
      this.counterDisplay = data.counter;
      this.pageName = data.pageName;
    });
    // this.counterSubscribe=this.store.select(getCounter).subscribe(data=>{
    //   this.counterDisplay = data;
    // });
    this.counter$ = this.store.select('counter');
  }


  onRename(){
    this.store.dispatch(rename({page:'Counter Display'}));
  }

  onInc(){
    this.store.dispatch(increment());
  }

  onDec(){
    this.store.dispatch(decrement());

  }

  onRes(){
    this.store.dispatch(reset());

  }

  onCusInc(){
    this.store.dispatch(customIncrement({value : +this.counterInp , action : this.actionType}));
  }
}
