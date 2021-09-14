import { Injectable } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class MediaGalleryService {
  constructor(private ms: MediaService) {}

  getMediaItems() {
    return this.ms.getMediaItems();
  }

  createMediaItem(item: MediaItem) {
    return this.ms.createMediaItem(item);
  }

  deleteMediaItem(item: MediaItem) {
    return this.ms.deleteMediaItem(item);
  }
}
