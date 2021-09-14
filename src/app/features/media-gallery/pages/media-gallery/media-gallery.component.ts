import { Component, OnInit } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaGalleryService } from '@features/media-gallery/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
})
export class MediaGalleryComponent implements OnInit {
  mediaItems$?: Observable<MediaItem[]>;

  constructor(private mgs: MediaGalleryService) {}

  ngOnInit(): void {
    this.mediaItems$ = this.mgs.getMediaItems();
  }

  onRemove(data: MediaItem): void {
    this.mgs.deleteMediaItem(data);
  }
}
