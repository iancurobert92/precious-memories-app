import { Injectable } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class MediaGalleryService {
  constructor(private mediaService: MediaService) {}

  getMediaItems(uid: string) {
    return this.mediaService.getMediaItems(uid);
  }

  createMediaItem(item: MediaItem, uid: string) {
    return this.mediaService.createMediaItem(item, uid);
  }

  deleteMediaItem(item: MediaItem, uid: string) {
    return this.mediaService.deleteMediaItem(item, uid);
  }
}
