import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-media-actions',
  templateUrl: './media-actions.component.html',
  styleUrls: ['./media-actions.component.scss'],
})
export class MediaActionsComponent {
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  isVisible: boolean = false;

  onClick() {
    this.remove.emit();
  }

  setVisible(value: boolean) {
    this.isVisible = value;
  }
}
