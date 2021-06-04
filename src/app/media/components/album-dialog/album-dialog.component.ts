import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlbumDialogData } from '@media/models/album-dialog-data';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.scss'],
})
export class AlbumDialogComponent implements OnInit {
  albumNameControl!: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: AlbumDialogData) {
    this.albumNameControl = new FormControl(data.defaultValue, [
      Validators.required,
      Validators.minLength(1),
    ]);
  }

  ngOnInit(): void {}
}
