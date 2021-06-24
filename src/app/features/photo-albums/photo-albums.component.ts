import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, Photo } from '@core/models';
import { AlbumService } from '@core/services';
import { NotificationDialogData } from '@shared/models/notification-dialog-data';
import { NotificationDialogComponent } from '@shared/notification-dialog/notification-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreateAlbumDialogComponent } from './components/create-album-dialog/create-album-dialog.component';
import { CreateAlbumDialogData } from './models/create-album-dialog-data';

@Component({
  selector: 'photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss'],
})
export class PhotoAlbumsComponent implements OnInit {
  /* #region  Public Properties */
  albums: Album<Photo>[] = [];
  /* #endregion */

  /* #region  Private Properties */
  private destroy$: Subject<void> = new Subject<void>();
  /* #endregion */

  constructor(
    private aS: AlbumService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  /* #region  Hook Methods */
  ngOnInit(): void {
    this.aS
      .getAlbums()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (items: Album<Photo>[]) => (this.albums = items),
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
  /* #endregion */

  /* #region  Event Handlers */
  onCreateAlbumBtnClicked(): void {
    this.openCreateAlbumDialog('Add Album', 'New Album', (value) => {
      if (value != '') {
        if (!this.albums.find((album) => album.name == value)) {
          this.aS.createAlbum(value);
        } else {
          this.openNotificationDialog(`The name '${value}' is taken.`);
        }
      }
    });
  }

  onDeleteAlbumClicked(data: Album<Photo>): void {
    this.aS.deleteAlbum(data.id);
  }

  onRenameBtnClicked(data: Album<Photo>): void {
    this.openCreateAlbumDialog('Edit Album', data.name, (value) => {
      if (value != '') {
        if (!this.albums.find((album) => album.name == value)) {
          this.aS.renameAlbum(data.id, value);
        } else {
          this.openNotificationDialog(`The name '${value}' is taken.`);
        }
      }
    });
  }

  onAlbumSelected(data: Album<Photo>): void {
    this.router.navigate(['/photos', data.id]);
  }
  /* #endregion */

  /* #region  Private Methods */
  private openCreateAlbumDialog(
    title: string,
    defaultValue: string,
    cbk?: (value: any) => void
  ): void {
    const config: MatDialogConfig<CreateAlbumDialogData> = {
      data: {
        title: title,
        inputLabel: 'Name',
        defaultValue: defaultValue,
      },
    };
    if (cbk) {
      this.dialog
        .open(CreateAlbumDialogComponent, config)
        .afterClosed()
        .subscribe({
          next: cbk,
        });
    }
  }

  private openNotificationDialog(message: string): void {
    const config: MatDialogConfig<NotificationDialogData> = {
      data: {
        message: message,
      },
    };
    this.dialog.open(NotificationDialogComponent, config);
  }
  /* #endregion */
}
