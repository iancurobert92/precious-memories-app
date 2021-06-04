import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  public fileName!: string;

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const file: File = (event.target as HTMLInputElement).files![0];
    if (file) this.fileName = file.name;
  }
}
