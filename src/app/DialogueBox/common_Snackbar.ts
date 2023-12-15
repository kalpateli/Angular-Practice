import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-common-snackbar',
    template: `
    
    `,
})

export class CommonSnackbar {
  constructor(private snackBar: MatSnackBar) { 

    this.openSnackBar('Snackbar message', 'Close');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
    });
  }


}