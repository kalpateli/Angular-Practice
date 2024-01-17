import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  Subscription,
  fromEvent,
  interval,
  of,
  toArray,
  take,
  timer,
  from,
  map,
  debounceTime,
  distinctUntilChanged
} from 'rxjs';
import { RxjsPracService } from 'src/app/shared/services/rxjs-prac.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})



export class RxjsComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() message: string;
  obsMsg: any;
  subs2: Subscription;
  subs3: Subscription;
  subs4: Subscription;
  members: any;

  sourceSub: Subscription;
  names: string;
  users: any[] = [
    { name: "abc", skill: 'Angular', job: { title: "Frontend" } },
    { name: "def", skill: 'Angular', job: { title: "Frontend" } },
    { name: "ghi", skill: 'Angular', job: { title: "Frontend" } }

  ]
  userData: any;
  techStatus: string;


  //form Event
  @ViewChild('addBtn') addBtn: ElementRef;

  searchGrp : FormGroup;
  searchGrp2 : FormGroup;

  // @ViewChild('search') searchInp: ElementRef;
  requestedData:any = null;
  requestedData2:any = null;


  constructor(private _rxjsPrac: RxjsPracService) {
    this.searchGrp = new FormGroup({
      search: new FormControl()
    });

    this.searchGrp2 = new FormGroup({
      search2: new FormControl()
    });
    
  }


  // fruits : string[] =["Apple","banana","Kiwi"]


  ngOnChanges() {
    // console.log("section 1 : changed")
  }

  ngOnInit(): void {



    //Map Operator
    // example:1 
    from(this.users).pipe(

      // map(x => x?.foo?.bar)
      map(data => { return data.job.title }),
      toArray()
    )
      .subscribe((res) => {
        // console.log(res);
        this.userData = res;
      })

    // example:2

    // const membersDetails = interval(1000);
    const membersDetails = from([
      { id: 1, name: 'abc' },
      { id: 2, name: 'def' },
      { id: 3, name: 'ghi' },
      { id: 4, name: 'jkl' },
    ])


    this.subs4 = membersDetails.pipe(
      map(data => {
        // console.log('member : ',data);
        return data.name;
        // let modData = 'Video : '+ data;
        // return modData;
      })).subscribe(res => {

        this.members = res;
        // console.log(res);
        this._rxjsPrac.printEl(res, 'mapContainer')

      }
      )

    setTimeout(() => {
      this.subs4.unsubscribe();
    }, 10000)

    //custom Observable (manual example)
    const cusObs1 = Observable.create((observer) => {

      setTimeout(() => {
        observer.next('JavaScript') // to emit we use next
      }, 1000)

      setTimeout(() => {
        observer.next('React')
        // observer.error(new Error('Limit Exceed'))// to manually create error
      }, 2000)

      setTimeout(() => {
        observer.next('CSS')
        observer.complete()   //this completes the process and doesnt goes to the next data 
      }, 3000)
    })

    cusObs1.subscribe((res) => {
      // console.log(res);
      this._rxjsPrac.printEl(res, 'elContainer')
    },
      (err) => {
        console.log(err);
        this.techStatus = 'error'

      },
      () => {
        this.techStatus = 'completed'

      })

    //custom Observable (custom Interval example)

    const arr2 = ['Angular', 'Typescript', 'HTML'];
    const cusObs2 = Observable.create((observer) => {
      let i = 0;
      setInterval(() => {
        // observer.next('data emit ' + i)
        observer.next(arr2[i])


        // if( i >= 1)
        // {
        //   observer.error((err)=>{
        //     console.log(err);
        //   })
        // }
        if (i >= 2) {
          observer.complete()
        }
        i++;
      }, 1000)
    })

    this.subs2 = cusObs2.subscribe((res) => {
      // console.log(res);
      this._rxjsPrac.printEl(res, 'intCustom')

    })


    //custom Observable (Random Names)

    const arr3 = ['Angular', 'Typescript', 'HTML'];
    const cusObs3 = Observable.create((observer) => {
      let i = 0;
      setInterval(() => {
        // observer.next('data emit ' + i)
        observer.next(arr3[i])


        // if( i >= 1)
        // {
        //   observer.error((err)=>{
        //     console.log(err);
        //   })
        // }
        if (i >= 2) {
          observer.complete()
        }
        i++;
      }, 1000)
    })
    this.subs3 = cusObs3.subscribe((res) => {
      // console.log(res);
      // this._rxjsPrac.printEl(res, 'ranNames');
      this.names = res
    })

    //toArray (Example 01)
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray())
      .subscribe((res) => {
        // console.log(res);

        // if(res >= 8)
        // {
        //   this.sourceSub.unsubscribe();
        // }
      })

    //toArray (Example 02)
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      // console.log(res);
    })


    //toArray (Example 03)
    const source3 = of("Apple", "banana", "Kiwi");
    source3.pipe(toArray()).subscribe((res) => {
      // console.log(res);
    })

    // interval (Example 01)
    const broadCast = interval(2000);
    broadCast.subscribe((res) => {
      // console.log(res);
      this.obsMsg = res;
    })

    //for timer
    const broadCast2 = timer(5000, 1000);
    broadCast2.subscribe((res) => {
      // console.log("Timer : "+res);
    })

    //of()
    const fruits = of("Apple", "banana", "Kiwi");

    fruits.subscribe((res) => {
      // console.log(res) 
    })
  }

  ngAfterViewInit() {

    // distinctUntilChanged
    
    // const searchTerm = fromEvent(this.searchInp.nativeElement, 'keyup').pipe(
      // map(event =>event.target.value)
      // )
    const searchTerm2 = (this.searchGrp2.get('search2').valueChanges).pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )


    searchTerm2.subscribe(res => {
      console.log(res);
      this.requestedData2 = res;

      setTimeout( () => {
        this.requestedData2 = null;
      },2000)
    })

    //debounce Operator
    const searchTerm = (this.searchGrp.get('search').valueChanges).pipe(
      debounceTime(1000)
    )


    searchTerm.subscribe(res => {
      console.log(res);
      this.requestedData = res;

      setTimeout( () => {
        this.requestedData = null;
      },2000)
    })

    // fromEvent(button,'click')
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click')
      .subscribe((res) => {
        // console.log(res);
        let countval = 'add ' + count++;
        this._rxjsPrac.printEl(countval, 'elContainer1');
        this._rxjsPrac.printEl(countval, 'elContainer2');

      })
  }

  ngOnDestroy(): void {
    // console.log("destroyed");
    this.subs2.unsubscribe();
  }


  // printEl(count : any, elContainer : string){
  //   let el=document.createElement('li');
  //   el.innerText=count;

  //   document.getElementById(elContainer).appendChild(el);

  // }
}
