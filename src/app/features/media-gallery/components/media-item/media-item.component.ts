import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaActionsComponent } from '../media-actions/media-actions.component';

@Component({ template: '' })
export abstract class MediaItemComponent {
  @Input() data: MediaItem | undefined;
  @Output() remove: EventEmitter<MediaItem> = new EventEmitter<MediaItem>();

  @ViewChild(MediaActionsComponent) mediaActions?: MediaActionsComponent;

  onMouseEnter(): void {
    this.mediaActions?.setVisible(true);
  }

  onMouseLeave(): void {
    this.mediaActions?.setVisible(false);
  }

  onRemove(): void {
    this.remove.emit(this.data);
  }
}
