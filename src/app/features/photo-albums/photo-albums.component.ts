import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Album, Photo } from '@core/models';
import { AlbumService } from '@core/services';
import { CreateAlbumDialogComponent } from './components/create-album-dialog/create-album-dialog.component';
import { CreateAlbumDialogData } from './models/create-album-dialog-data';

@Component({
  selector: 'photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss'],
})
export class PhotoAlbumsComponent implements OnInit {
  /* #region  Public Properties */
  albums: Album<Photo[]>[] = [];
  /* #endregion */

  constructor(private aS: AlbumService, private dialog: MatDialog) {}

  /* #region  Public Methods */
  ngOnInit(): void {
    this.aS.getAlbums().subscribe({
      next: (items: Album<Photo[]>[]) => (this.albums = items),
    });
  }
  /* #endregion */

  /* #region  Event Handlers */
  onCreateAlbumBtnClicked(): void {
    this.openCreateAlbumDialog((value) => {
      if (value != '') {
        if (!this.albums.find((album) => album.name == value))
          this.aS.createAlbum(value);
      }
    });
  }

  onDeleteAlbumClicked(id: string): void {
    this.aS.deleteAlbum(id);
  }

  onEditAlbumClicked(id: string): void {
    this.openCreateAlbumDialog((value) => {
      if (value != '') {
        if (!this.albums.find((album) => album.name == value))
          this.aS.renameAlbum(id, value);
      }
    });
  }
  /* #endregion */

  /* #region  Private Methods */
  private openCreateAlbumDialog(cbk: (value: any) => void): void {
    const data: CreateAlbumDialogData = {
      title: 'Add Album',
      inputLabel: 'Name',
      defaultValue: 'New Album',
    };
    this.dialog
      .open(CreateAlbumDialogComponent, { data: data })
      .afterClosed()
      .subscribe({
        next: cbk,
      });
  }
  /* #endregion */
}
