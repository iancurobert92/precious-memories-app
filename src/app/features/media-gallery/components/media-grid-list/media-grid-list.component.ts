import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItem } from '@core/models';

@Component({
  selector: 'app-media-grid-list',
  templateUrl: './media-grid-list.component.html',
  styleUrls: ['./media-grid-list.component.scss'],
})
export class MediaGridListComponent {
  @Input() data?: MediaItem[] | null;
  @Output() remove: EventEmitter<MediaItem> = new EventEmitter<MediaItem>();

  onRemove(item: MediaItem): void {
    this.remove.emit(item);
  }
}
