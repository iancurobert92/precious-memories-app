import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Album, Photo } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private db: AngularFirestore) {}

  /* #region  Public Methods */
  getAlbums(): Observable<Album<Photo[]>[]> {
    return this.db.collection('albums').valueChanges() as Observable<
      Album<Photo[]>[]
    >;
  }

  getAlbum(id: string): Observable<Album<Photo[]>> | undefined {
    return this.getAlbumDocRef(id).valueChanges() as Observable<Album<Photo[]>>;
  }

  createAlbum(name: string): void {
    this.setAlbum(name);
  }

  renameAlbum(id: string, newName: string): void {
    this.setAlbum(newName, id);
  }

  deleteAlbum(id: string): void {
    this.getAlbumDocRef(id).delete();
  }
  /* #endregion */

  /* #region  Private Methods */
  private getAlbumDocRef(id?: string | undefined): AngularFirestoreDocument {
    return this.db.collection('albums').doc(id);
  }

  private setAlbum(name: string, id?: string): void {
    const docRef: AngularFirestoreDocument = this.getAlbumDocRef(id);
    let album: Album<Photo[]> = {
      id: docRef.ref.id,
      name: name,
    };
    docRef.set(album);
  }
  /* #endregion */
}
