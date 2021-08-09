import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaItemData } from '@core/models';
import { MediaService } from '@core/services/media.service';
import { UploadStatusComponent } from '@modules/file-uploader/components';
import { UploadStatus } from '@modules/file-uploader/enums';
import { FileUploaderService } from '@modules/file-uploader/services';
import { Subject } from 'rxjs';
import { takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private ms: MediaService, private fus: FileUploaderService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    //Add a new photo to the database
    this.fus
      .getUploadData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          var today = new Date();
          var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
          var dateTime = date + ' ' + time;

          let photo: MediaItemData = {
            id: '',
            uploadDate: dateTime,
            name: data.file.name,
            description: '',
            url: '',
            storageLink: data.storageLink,
          };
          data.downloadUrl$.pipe(takeUntil(this.destroy$), takeLast(1)).subscribe({
            next: (url) => {
              if (url) photo.url = url;
            },
            complete: () => {
              this.ms.createMediaItem(photo);
            },
          });
        },
      });

    //Display the upload progress/loading animation
    this.fus
      .getUploadStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (status) => {
          switch (status) {
            case UploadStatus.Uploading:
              this.snackbar.openFromComponent(UploadStatusComponent, {
                horizontalPosition: 'start',
                verticalPosition: 'bottom',
              });
              break;
            case UploadStatus.Error:
            case UploadStatus.Complete:
              this.snackbar.dismiss();
              break;
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
