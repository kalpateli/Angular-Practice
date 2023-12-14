import { Component } from "@angular/core";
// import { MatSnackBar } from "@angular/material/snack-bar";
import { SignupPageComponent } from "../module-3/signup-page/signup-page.component";

@Component({
    selector: 'app-common-snackbar',
    template: `
    <span class="example-pizza-party" matSnackBarLabel>
  Pizza party!!!
</span>
<span matSnackBarActions>
  <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">🍕</button>
</span>
    `,
})

export class CommonSnackbar {
    durationInSeconds = 5;

    constructor() {}
  
    // openSnackBar() {
    //   this.openSnackBar.openFromComponent(SignupPageComponent, {
    //     duration: this.durationInSeconds * 1000,
    //   });
    // }
}