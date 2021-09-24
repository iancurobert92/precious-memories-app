import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaItem } from '@core/models';
import { AuthState } from '@core/states';
import { MediaItemComponent } from '@features/media-gallery/components/media-item/media-item.component';
import { MediaCollection } from '@features/media-gallery/models/media-collection.model';
import { DeselectItem, FetchItems, MediaSelectors, SelectItem } from '@features/media-gallery/store';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { take, takeLast, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
})
export class MediaGalleryComponent implements OnInit, OnDestroy {
  mediaItems$?: Observable<MediaItem[]>;

  collections: MediaCollection[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.mediaItems$ = this.store.select(MediaSelectors.items).pipe(
      takeUntil(this.destroy$),
      tap((items: MediaItem[]) => {
        const mediaMap: { [key: string]: MediaItem[] } = {};
        items.forEach((item: MediaItem) => {
          const dateCreated: number = new Date(item.dateCreated).getTime();
          if (!mediaMap[dateCreated]) {
            mediaMap[dateCreated] = [];
          }
          mediaMap[dateCreated].push(item);
        });

        this.collections = [];
        for (let key in mediaMap) {
          this.collections.push({
            date: mediaMap[key][0].dateCreated,
            media: mediaMap[key],
          });
        }
        this.collections.sort((a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1));
      })
    );

    const user = this.store.selectSnapshot(AuthState.user);
    if (user) {
      this.store.dispatch(new FetchItems(user));
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSelect(item: MediaItemComponent): void {
    if (!item.data) return;

    if (item.selected) {
      this.store.dispatch(new SelectItem(item.data));
    } else {
      this.store.dispatch(new DeselectItem(item.data));
    }
  }
}
