import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentData,
  DocumentReference,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MediaItem, MediaItemAdapter } from '@core/models';
import { from, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private adapter: MediaItemAdapter) {}

  fetchMedia(uid: string): Observable<MediaItem[]> {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('media')
      .valueChanges()
      .pipe(map((data: DocumentData[]) => data.map((item: DocumentData) => this.adapter.adapt(item))));
  }

  addMedia(item: MediaItem, uid: string) {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('media')
      .add(item)
      .then((docRef) => {
        docRef.update({ id: docRef.id });
      });
  }

  deleteMedia(item: MediaItem, uid: string) {
    return this.db
      .collection('users')
      .doc(uid)
      .collection('media')
      .doc(item.id)
      .delete()
      .then(() => {
        this.storage.refFromURL(item.url).delete();
      });
  }
}
