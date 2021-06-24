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
  getAlbums(): Observable<Album<Photo>[]> {
    return this.db.collection('albums').valueChanges() as Observable<
      Album<Photo>[]
    >;
  }

  getAlbum(id: string): Observable<Album<Photo>> | undefined {
    return this.getAlbumDocRef(id).valueChanges() as Observable<Album<Photo>>;
  }

  createAlbum(name: string): void {
    const docRef: AngularFirestoreDocument = this.getAlbumDocRef();
    let album: Album<Photo> = {
      id: docRef.ref.id,
      name: name,
      media: [],
    };
    docRef.set(album);
  }

  renameAlbum(id: string, newName: string): void {
    const docRef: AngularFirestoreDocument = this.getAlbumDocRef(id);
    docRef.update({ name: newName });
  }

  deleteAlbum(id: string): void {
    this.getAlbumDocRef(id).delete();
  }
  /* #endregion */

  /* #region  Private Methods */
  private getAlbumDocRef(id?: string | undefined): AngularFirestoreDocument {
    return this.db.collection('albums').doc(id);
  }
  /* #endregion */
}
