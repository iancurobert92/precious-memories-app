import { Injectable } from '@angular/core';
import { Album } from '@media/models';
import { AlbumsService } from '@media/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosFacade {
  constructor(private albumsService: AlbumsService) {}

  getAlbum(id: string): Observable<Album> {
    return this.albumsService
      .getAlbumDocRef(id)
      .valueChanges() as Observable<Album>;
  }

  addPhoto(): void {}

  deletePhoto(): void {}

  updatePhoto(): void {}
}
