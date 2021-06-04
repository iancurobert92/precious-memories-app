import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { AlbumDialogComponent } from '@media/components';
import { Album } from '@media/models/album';
import { AlbumDialogData } from '@media/models/album-dialog-data';
import { AlbumsService } from '@media/services';
import { ConfirmationDialogComponent } from '@shared/components/confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlbumsFacade {
  constructor(
    private dialog: MatDialog,
    private albumsService: AlbumsService
  ) {}

  getAlbums(): Observable<Album[]> {
    return this.albumsService.getAlbums();
  }

  createAlbum(): void {
    let dialogData: AlbumDialogData = {
      title: 'Create New Album',
      defaultValue: 'New Album',
    };
    this.dialog
      .open(AlbumDialogComponent, { data: dialogData })
      .afterClosed()
      .subscribe({
        next: (value: string) => {
          if (value != '') {
            this.getAlbums()
              .pipe(take(1))
              .subscribe({
                next: (albums: Album[]) => {
                  if (!albums.find((album: Album) => album.name == value)) {
                    this.setAlbum(value);
                  }
                },
              });
          }
        },
      });
  }

  deleteAbum(id: string): void {
    this.dialog
      .open(ConfirmationDialogComponent)
      .afterClosed()
      .subscribe({
        next: (value: boolean) => {
          if (value) this.albumsService.deleteAlbum(id);
        },
      });
  }

  editAlbum(id: string): void {
    let dialogData: AlbumDialogData = {
      title: 'Edit Album',
    };
    this.getAlbums()
      .pipe(take(1))
      .subscribe({
        next: (albums: Album[]) => {
          for (let i = 0; i < albums.length; i++) {
            const album = albums[i];
            if (album.id == id) {
              dialogData.defaultValue = album.name;
              break;
            }
          }
        },
        complete: () => {
          this.dialog
            .open(AlbumDialogComponent, { data: dialogData })
            .afterClosed()
            .subscribe({
              next: (value: string) => {
                if (value != '') {
                  this.getAlbums()
                    .pipe(take(1))
                    .subscribe({
                      next: (albums: Album[]) => {
                        if (
                          !albums.find((album: Album) => album.name == value)
                        ) {
                          this.setAlbum(value, id);
                        }
                      },
                    });
                }
              },
            });
        },
      });
  }

  setAlbum(name: string, id?: string): void {
    const docRef: AngularFirestoreDocument =
      this.albumsService.getAlbumDocRef(id);
    let album: Album = {
      id: docRef.ref.id,
      name: name,
    };
    docRef.set(album);
  }
}
