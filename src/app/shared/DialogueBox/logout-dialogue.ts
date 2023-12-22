import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-edit-user-dialogue',
    template: `
    <div class="dialogue-container">
        <h1 mat-dialog-title class='dialogue-title'>LogOut ?</h1>
        <div mat-dialog-content class='dialogue-content'>Do You Want to Log Out?</div>
        <div mat-dialog-actions class='dialogue-buttons'>
            <button mat-raised-button  (click)="closeDialog(false)" mat-dialog-close>No</button>
            <button mat-raised-button  (click)="closeDialog(true)" mat-dialog-close cdkFocusInitial>Ok</button>
        </div>
    </div>
    `,
})

export class LogOutDialogue {
    constructor(public dialogRef: MatDialogRef<LogOutDialogue>) {

    }

    closeDialog(result: boolean): void {
        this.dialogRef.close(result);
    }

}