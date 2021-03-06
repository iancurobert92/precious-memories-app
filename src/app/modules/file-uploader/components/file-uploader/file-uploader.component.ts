import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UploadStatus } from '@modules/file-uploader/enums';
import { FileUploaderConfig, UploadData } from '@modules/file-uploader/models';
import { FileUploaderService } from '@modules/file-uploader/services';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subject } from 'rxjs';
import { finalize, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit, OnDestroy {
  @Input() config?: FileUploaderConfig;
  @ViewChild('inputRef') inputRef?: ElementRef<HTMLInputElement>;
  @Output() uploadChange: EventEmitter<UploadData> = new EventEmitter<UploadData>();

  inputControl!: FormControl;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private uploadService: FileUploaderService) {}

  ngOnInit(): void {
    this.inputControl = new FormControl('', {
      validators: [RxwebValidators.extension({ extensions: this.config?.extensions || [] })],
    });

    this.uploadService.setUploadStatus(UploadStatus.Default);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onInputChange(): void {
    const files: FileList | null | undefined = this.inputRef?.nativeElement.files;
    if (!files) return;
    if (files.length == 0) return;

    this.uploadService.setUploadStatus(UploadStatus.Uploading);

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        if (file) {
          const data: UploadData = this.uploadService.upload(file, this.config?.basePath || '');
          this.uploadService.setUploadData(data);
          if (i == files.length - 1)
            data.progress$
              .pipe(
                takeUntil(this.destroy$),
                takeLast(1),
                finalize(() => {
                  if (this.inputRef) this.inputRef.nativeElement.value = '';
                })
              )
              .subscribe({
                error: () => this.uploadService.setUploadStatus(UploadStatus.Error),
                complete: () => this.uploadService.setUploadStatus(UploadStatus.Complete),
              });
        }
      }
    }
  }

  click() {
    this.inputRef?.nativeElement.click();
  }
}
