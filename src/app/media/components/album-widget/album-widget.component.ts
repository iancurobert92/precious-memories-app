import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '@media/models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album-widget.component.html',
  styleUrls: ['./album-widget.component.scss'],
})
export class AlbumWidgetComponent implements OnInit {
  @Input() data!: Album;
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
