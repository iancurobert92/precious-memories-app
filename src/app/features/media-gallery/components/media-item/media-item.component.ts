import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaActionsComponent } from '../media-actions/media-actions.component';

@Component({ template: '' })
export abstract class MediaItemComponent {
  @Input() data: MediaItem | undefined;
  @Output() onselect: EventEmitter<MediaItemComponent> = new EventEmitter<MediaItemComponent>();

  @ViewChild(MediaActionsComponent) mediaActions?: MediaActionsComponent;

  selected: boolean = false;

  onClick() {
    this.selected = !this.selected;
    this.onselect.emit(this);
  }

  onMouseEnter(): void {
    this.mediaActions?.setVisible(true);
  }

  onMouseLeave(): void {
    this.mediaActions?.setVisible(false);
  }
}
