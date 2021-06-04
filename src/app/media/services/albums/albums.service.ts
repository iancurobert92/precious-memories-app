import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Album } from '@media/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private db: AngularFirestore) {}

  getAlbums(): Observable<Album[]> {
    return this.db.collection('albums').valueChanges() as Observable<Album[]>;
  }

  getAlbumDocRef(id: string | undefined): AngularFirestoreDocument {
    return this.db.collection('albums').doc(id);
  }

  deleteAlbum(id: string): void {
    this.db.collection('albums').doc(id).delete();
  }
}
