import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignOut } from '@core/actions';
import { MediaItem, User } from '@core/models';
import { MediaService } from '@core/services';
import { AuthState } from '@core/states';
import { DeleteItem, DeselectItem, MediaSelectors } from '@features/media-gallery/store';
import { FileUploaderConfig } from '@modules/file-uploader/models';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Select(MediaSelectors.selectedItems) selectedMediaItems$?: Observable<MediaItem[]>;
  fileUploaderConfig!: FileUploaderConfig;

  private destroy$: Subject<boolean> = new Subject<boolean>();
  private user?: User | null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AuthState.user);
    this.fileUploaderConfig = {
      extensions: ['.png', '.jpg', '.jpeg'],
      basePath: `/uploads/${this.user?.id}`,
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onDeleteBtnClick(): void {
    this.selectedMediaItems$
      ?.pipe(
        takeUntil(this.destroy$),
        take(1),
        tap((items) =>
          items.forEach((item) => {
            if (this.user) {
              this.store.dispatch(new DeleteItem({ user: this.user, item: item }));
            }
            return item;
          })
        )
      )
      .subscribe();
  }

  onSignOutBtnClick() {
    this.store.dispatch(new SignOut());
  }
}
