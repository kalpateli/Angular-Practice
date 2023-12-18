import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsPracService {

  
  constructor() { }
 
  printEl(val,containerId){
    let el = document.createElement('li');
    el.innerText =val;

    document.getElementById(containerId).appendChild(el);
  }
}


// .subscribe(
//   (res)=>console.log(res),  //data
//   (error)=>console.log(error),  //error
//   ()=>console.log("completed")  //completion
// )

