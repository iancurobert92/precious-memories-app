import { Injectable } from '@angular/core';
import { MediaItemData } from '@core/models';
import { MediaService } from '@core/services/media.service';

@Injectable({
  providedIn: 'root',
})
export class MediaGalleryService {
  constructor(private ms: MediaService) {}

  getMediaItems() {
    return this.ms.getMediaItems();
  }

  createMediaItem(item: MediaItemData) {
    return this.ms.createMediaItem(item);
  }

  deleteMediaItem(item: MediaItemData) {
    return this.ms.deleteMediaItem(item);
  }
}
