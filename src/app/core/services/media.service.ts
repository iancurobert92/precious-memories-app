import { Injectable } from '@angular/core';
import { MediaItemData } from '@core/models';
import { FileUploaderService } from '@modules/file-uploader/services';
import { map } from 'rxjs/operators';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private as: ApiService, private fus: FileUploaderService) {}

  getMediaItems() {
    return this.as.get('media').pipe(
      map((value) => {
        return value
          .map((data) => data.payload.doc.data() as MediaItemData)
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

  createMediaItem(item: MediaItemData) {
    return this.as.post('media', item).then((docRef) => {
      docRef.update({ id: docRef.id });
    });
  }

  deleteMediaItem(item: MediaItemData) {
    return this.as.delete('media', item).then(() => {
      this.fus.delete(item.storageLink);
    });
  }
}
