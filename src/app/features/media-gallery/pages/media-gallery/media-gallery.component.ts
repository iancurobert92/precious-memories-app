import { Component, OnInit } from '@angular/core';
import { MediaItem, User } from '@core/models';
import { AuthState } from '@core/states';
import { MediaGalleryService } from '@features/media-gallery/services';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
})
export class MediaGalleryComponent implements OnInit {
  mediaItems$?: Observable<MediaItem[]>;

  private user?: User | null;

  constructor(private store: Store, private mgs: MediaGalleryService) {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AuthState.user);
    this.mediaItems$ = this.mgs.getMediaItems(this.user?.id!);
  }

  onRemove(data: MediaItem): void {
    this.mgs.deleteMediaItem(data, this.user?.id!);
  }
}
