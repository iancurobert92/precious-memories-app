import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediaItemData } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private db: AngularFirestore) {}

  get(uri: string) {
    return this.db.collection(uri).snapshotChanges();
  }

  post(uri: string, item: MediaItemData) {
    return this.db.collection(uri).add(item);
  }

  patch() {}

  delete(uri: string, item: MediaItemData) {
    return this.db.collection(uri).doc(item.id).delete();
  }
}
