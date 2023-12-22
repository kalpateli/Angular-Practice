import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector:'app-edit-user-dialogue',
    template : `
    <div class="dialogue-container">
    <h1 mat-dialog-title class="dialogue-title">Save Changes ?</h1>
    <div mat-dialog-content class="dialogue-content">
    Are You sure You Want to Save the Changes?
    </div>
    <div mat-dialog-actions class="dialogue-buttons">
    <button mat-button  (click)="closeDialog(false)" mat-dialog-close>No</button>
    <button mat-button  (click)="closeDialog(true)" mat-dialog-close cdkFocusInitial>Yes</button>
    </div>
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