import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-media-grid-list',
  templateUrl: './media-grid-list.component.html',
  styleUrls: ['./media-grid-list.component.scss'],
})
export class MediaGridListComponent {
  @Input() data?: MediaItem[];
  @Output() onselect: EventEmitter<MediaItem> = new EventEmitter<MediaItem>();

  onClick(item: MediaItem): void {
    this.onselect.emit(item);
  }
}
