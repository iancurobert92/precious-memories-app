import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-media-grid-list',
  templateUrl: './media-grid-list.component.html',
  styleUrls: ['./media-grid-list.component.scss'],
})
export class MediaGridListComponent {
  @Input() data?: MediaItem[] | null;
  @Output() onselect: EventEmitter<MediaItemComponent> = new EventEmitter<MediaItemComponent>();

  onSelect(item: MediaItemComponent): void {
    this.onselect.emit(item);
  }
}
