import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector:'app-edit-user-dialogue',
    template : `
    <h1 mat-dialog-title>Save Changes ?</h1>
    <div mat-dialog-content>
    Are You sure You Want to Save the Changes?
    </div>
    <div mat-dialog-actions>
    <button mat-button  (click)="closeDialog(false)" mat-dialog-close>No</button>
    <button mat-button  (click)="closeDialog(true)" mat-dialog-close cdkFocusInitial>Ok</button>
    </div>
    `,
})

export class EditUserDialogue {
    constructor(public dialogRef: MatDialogRef<EditUserDialogue>) {

    }

    closeDialog(result: boolean): void {
        this.dialogRef.close(result);
      }

  }