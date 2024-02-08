import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WinData } from '../win-data';

@Component({
  selector: 'app-win-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrls: ['./win-dialog.component.scss']
})
export class WinDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WinDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WinData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
