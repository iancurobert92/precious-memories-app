import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MediaItem } from '@core/models';
import { AuthState } from '@core/states';
import { MediaItemComponent } from '@features/media/components/media-item/media-item.component';
import { MediaCollection } from '@features/media/models/media-collection.model';
import { DeselectItem, DeselectOthers, FetchItems, MediaSelectors, SelectItem } from '@features/media/store';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, OnDestroy {
  mediaItems$?: Observable<MediaItem[]>;

  collections: MediaCollection[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();
  private ctrlPressed: boolean = false;
  private shiftPressed: boolean = false;

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

  onSelect(item: MediaItem): void {
    if (!item.selected) {
      if (!this.ctrlPressed) this.store.dispatch(new DeselectOthers(item));
      this.store.dispatch(new SelectItem(item));
    } else {
      this.store.dispatch(new DeselectItem(item));
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'ControlLeft') this.ctrlPressed = true;
    if (event.code === 'ShiftLeft') this.shiftPressed = true;
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.code === 'ControlLeft') this.ctrlPressed = false;
    if (event.code === 'ShiftLeft') this.shiftPressed = false;
  }
}
