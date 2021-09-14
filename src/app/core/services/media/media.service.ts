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

  getMediaItems() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.af
      .collection('users')
      .doc(user?.uid)
      .collection('media')
      .snapshotChanges()
      .pipe(
        map((value) => {
          return value
            .map((data) => data.payload.doc.data() as MediaItem)
            .sort((a, b) => {
              const aUploadTime = new Date(a.uploadDate).getTime();
              const bUploadTime = new Date(b.uploadDate).getTime();
              if (aUploadTime > bUploadTime) return 1;
              if (aUploadTime < bUploadTime) return -1;
              return 0;
            });
        })
      );
  }

  createMediaItem(item: MediaItem) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.af
      .collection('users')
      .doc(user?.uid)
      .collection('media')
      .add(item)
      .then((docRef) => {
        docRef.update({ id: docRef.id });
      });
  }

  deleteMediaItem(item: MediaItem) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.af
      .collection('users')
      .doc(user?.uid)
      .collection('media')
      .doc(item.id)
      .delete()
      .then(() => {
        this.fus.delete(item.url);
      });
  }
}
