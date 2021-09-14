import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaItem } from '@core/models';
import { AuthService, MediaService } from '@core/services';
import { UploadStatusComponent } from '@modules/file-uploader/components';
import { UploadStatus } from '@modules/file-uploader/enums';
import { FileUploaderConfig } from '@modules/file-uploader/models';
import { FileUploaderService } from '@modules/file-uploader/services';
import { Subject } from 'rxjs';
import { takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  fileUploaderConfig!: FileUploaderConfig;

  constructor(
    private ms: MediaService,
    private as: AuthService,
    private fus: FileUploaderService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fileUploaderConfig = {
      extensions: ['.png', '.jpg', '.jpeg'],
      basePath: `/uploads/${JSON.parse(localStorage.getItem('user')!).uid}`,
    };

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

          let photo: MediaItem = {
            id: '',
            uploadDate: dateTime,
            storageLink: data.storageLink,
            url: '',
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

  logOut(): void {
    this.as.signOut();
  }
}
