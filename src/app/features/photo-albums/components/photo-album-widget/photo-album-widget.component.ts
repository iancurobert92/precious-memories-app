import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album, Photo } from '@core/models';

@Component({
  selector: 'photo-album-widget',
  templateUrl: './photo-album-widget.component.html',
  styleUrls: ['./photo-album-widget.component.scss'],
})
export class PhotoAlbumWidgetComponent implements OnInit {
  @Input() data!: Album<Photo[]>;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteBtnClicked(id: string): void {
    this.onDelete.emit(id);
  }

  onEditBtnClicked(id: string): void {
    this.onEdit.emit(id);
  }
}
