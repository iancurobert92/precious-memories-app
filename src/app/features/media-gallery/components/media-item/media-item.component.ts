import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MediaItemData } from '@core/models';
import { MediaActionsComponent } from '../media-actions/media-actions.component';

@Component({ template: '' })
export abstract class MediaItemComponent {
  @Input() data: MediaItemData | undefined;
  @Output() remove: EventEmitter<MediaItemData> = new EventEmitter<MediaItemData>();

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
