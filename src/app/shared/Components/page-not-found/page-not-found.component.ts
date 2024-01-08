import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `<div class="content">
              <div>
              Page Not Found
              </div>
              <br>
              <div>
              <button mat-raised-button  color="warn"  (click)='onClick()'>Home Page</button>
              </div>

              </div>
              `,
  styles: [`

          .content{
            font-weight:bold;
            display : flex;
            flex-direction : column;
            justify-content : center;
            align-items : center;
            height:75vh;
          }
          button{
            
          }
        `]
})
export class PageNotFoundComponent {


  constructor(
    private router : Router
  ){

  }

  onClick(){
    this.router.navigate(['/home'])
  }

}
