import { Injectable } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaService } from '@core/services';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MediaStateModel } from '../models';
import { AddItem, DeleteItem, DeselectItem, FetchItems, SelectItem } from './media.actions';
import { patch, append, removeItem } from '@ngxs/store/operators';

@State<MediaStateModel>({
  name: 'media',
  defaults: {
    items: [],
    selectedItems: [],
  },
})
@Injectable()
export class MediaState {
  constructor(private mediaService: MediaService) {}

  @Action(FetchItems)
  fetchItems(ctx: StateContext<MediaStateModel>, action: FetchItems): Observable<MediaItem[]> {
    return this.mediaService.fetchMedia(action.payload.id).pipe(
      tap((data) => {
        ctx.patchState({ items: data });
      })
    );
  }

  @Action(AddItem)
  addItem(ctx: StateContext<MediaStateModel>, action: AddItem) {
    return this.mediaService.addMedia(action.payload.item, action.payload.user.id);
  }

  @Action(DeleteItem)
  deleteItem(ctx: StateContext<MediaStateModel>, action: DeleteItem) {
    return this.mediaService.deleteMedia(action.payload.item, action.payload.user.id).then(() => {
      ctx.dispatch(new DeselectItem(action.payload.item));
    });
  }

  @Action(SelectItem)
  selectItem(ctx: StateContext<MediaStateModel>, action: SelectItem) {
    ctx.setState(
      patch({
        selectedItems: append<MediaItem>([action.payload]),
      })
    );
  }

  @Action(DeselectItem)
  deselectItem(ctx: StateContext<MediaStateModel>, action: DeselectItem) {
    ctx.setState(
      patch({
        selectedItems: removeItem<MediaItem>((item) => item?.id == action.payload.id),
      })
    );
  }
}
