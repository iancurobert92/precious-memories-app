import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaItem } from '@core/models';
import { AuthState } from '@core/states';
import { AddItem } from '@features/media/store';
import { UploadStatusComponent } from '@modules/file-uploader/components';
import { UploadStatus } from '@modules/file-uploader/enums';
import { FileUploaderService } from '@modules/file-uploader/services';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store, private uploadService: FileUploaderService, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.uploadService.getUploadData().subscribe({
      next: (data) => {
        data.downloadUrl$.toPromise().then((url) => {
          if (url) {
            const item = new MediaItem('', data.storageLink, new Date(data.file.lastModified).toDateString(), url);
            this.store.dispatch(
              new AddItem({
                user: this.store.selectSnapshot(AuthState.user)!,
                item: { ...item },
              })
            );
          }
        });
      },
    });

    //Display the upload progress/loading animation
    this.uploadService.getUploadStatus().subscribe({
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
