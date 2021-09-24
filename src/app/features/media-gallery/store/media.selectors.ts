import { MediaItem } from '@core/models';
import { Selector } from '@ngxs/store';
import { MediaStateModel } from '../models';
import { MediaState } from './media.state';

export class MediaSelectors {
  @Selector([MediaState])
  static items(state: MediaStateModel): MediaItem[] {
    return state.items;
  }

  @Selector([MediaState])
  static selectedItems(state: MediaStateModel): MediaItem[] {
    return state.selectedItems;
  }
}
