import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediaItem } from '@core/models';
import { FileUploaderService } from '@modules/file-uploader/services';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private af: AngularFirestore, private fus: FileUploaderService) {}

  getMediaItems(uid: string) {
    return this.af
      .collection('users')
      .doc(uid)
      .collection('media')
      .snapshotChanges()
      .pipe(
        map((value) => {
          return value.map((data) => data.payload.doc.data() as MediaItem);
        })
      );
  }

  createMediaItem(item: MediaItem, uid: string) {
    return this.af
      .collection('users')
      .doc(uid)
      .collection('media')
      .add(item)
      .then((docRef) => {
        docRef.update({ id: docRef.id });
      });
  }

  deleteMediaItem(item: MediaItem, uid: string) {
    return this.af
      .collection('users')
      .doc(uid)
      .collection('media')
      .doc(item.id)
      .delete()
      .then(() => {
        this.fus.delete(item.url);
      });
  }
}
