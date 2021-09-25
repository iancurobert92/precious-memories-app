import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MediaItem } from '@core/models';
import { MediaActionsComponent } from '../media-actions/media-actions.component';

@Component({ template: '' })
export abstract class MediaItemComponent {
  @Input() selected: boolean = false;
  @Input() url: string = '';
  @Output() onselect: EventEmitter<MediaItemComponent> = new EventEmitter<MediaItemComponent>();

  @ViewChild(MediaActionsComponent) mediaActions?: MediaActionsComponent;

  onMouseEnter(): void {
    this.mediaActions?.setVisible(true);
  }

  onMouseLeave(): void {
    this.mediaActions?.setVisible(false);
  }
}
