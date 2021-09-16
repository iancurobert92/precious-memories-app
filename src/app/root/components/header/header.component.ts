import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignOut } from '@core/actions';
import { MediaItem, User } from '@core/models';
import { MediaService } from '@core/services';
import { AuthState, AuthStateModel } from '@core/states';
import { UploadStatusComponent } from '@modules/file-uploader/components';
import { UploadStatus } from '@modules/file-uploader/enums';
import { FileUploaderConfig } from '@modules/file-uploader/models';
import { FileUploaderService } from '@modules/file-uploader/services';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
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
    private store: Store,
    private ms: MediaService,
    private fus: FileUploaderService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fileUploaderConfig = {
      extensions: ['.png', '.jpg', '.jpeg'],
      basePath: `/uploads/${this.store.selectSnapshot(AuthState.user)?.id}`,
    };

    //Add a new photo to the database
    this.fus
      .getUploadData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          let photo: MediaItem = {
            id: '',
            dateCreated: new Date(data.file.lastModified).toDateString(),
            storageLink: data.storageLink,
            url: '',
          };
          data.downloadUrl$.pipe(takeUntil(this.destroy$), takeLast(1)).subscribe({
            next: (url) => {
              if (url) photo.url = url;
            },
            complete: () => {
              this.ms.createMediaItem(photo, this.store.selectSnapshot(AuthState.user)?.id!);
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

  @Dispatch()
  logOut() {
    return new SignOut();
  }
}
