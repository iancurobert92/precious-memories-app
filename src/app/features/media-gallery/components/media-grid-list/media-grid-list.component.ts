import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItemData } from '@core/models';

@Component({
  selector: 'app-media-grid-list',
  templateUrl: './media-grid-list.component.html',
  styleUrls: ['./media-grid-list.component.scss'],
})
export class MediaGridListComponent {
  @Input() data?: MediaItemData[] | null;
  @Output() remove: EventEmitter<MediaItemData> = new EventEmitter<MediaItemData>();

  onRemove(item: MediaItemData): void {
    this.remove.emit(item);
  }
}
