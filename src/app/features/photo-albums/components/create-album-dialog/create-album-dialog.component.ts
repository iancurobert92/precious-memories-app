import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateAlbumDialogData } from '@features/photo-albums/models/create-album-dialog-data';

@Component({
  selector: 'app-create-album-dialog',
  templateUrl: './create-album-dialog.component.html',
  styleUrls: ['./create-album-dialog.component.scss'],
})
export class CreateAlbumDialogComponent implements OnInit {
  nameForm!: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateAlbumDialogData) {
    this.nameForm = new FormControl(data.defaultValue, [
      Validators.required,
      Validators.minLength(1),
    ]);
  }

  ngOnInit(): void {}
}
