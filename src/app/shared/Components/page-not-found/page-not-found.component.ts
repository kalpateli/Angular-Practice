import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<div>
              Page Not Found
              </div>
              <button>Home Page</button>
              `,
  styles: [`

          div{
            font-weight:bold;
          }
        `]
})
export class PageNotFoundComponent {

}
