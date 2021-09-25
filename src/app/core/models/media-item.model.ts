import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class MediaItem {
  constructor(
    public id: string = '',
    public storageLink: string = '',
    public dateCreated: string = '',
    public url: string = '',
    public selected: boolean = false
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MediaItemAdapter implements Adapter<MediaItem> {
  adapt(item: any): MediaItem {
    return new MediaItem(item.id, item.storageLink, item.dateCreated, item.url, item.selected);
  }
}
