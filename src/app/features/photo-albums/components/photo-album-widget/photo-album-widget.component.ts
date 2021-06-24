import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Album, Photo } from "@core/models";

@Component({
  selector: "photo-album-widget",
  templateUrl: "./photo-album-widget.component.html",
  styleUrls: ["./photo-album-widget.component.scss"],
})
export class PhotoAlbumWidgetComponent implements OnInit {
  /* #region  Inputs */
  @Input() data!: Album<Photo>;
  /* #endregion */

  /* #region  Outputs */
  @Output() delete: EventEmitter<Album<Photo>> = new EventEmitter<Album<Photo>>();
  @Output() rename: EventEmitter<Album<Photo>> = new EventEmitter<Album<Photo>>();
  @Output() select: EventEmitter<Album<Photo>> = new EventEmitter<Album<Photo>>();
  /* #endregion */

  constructor() {}

  /* #region  Public methods */
  ngOnInit(): void {}
  /* #endregion */

  /* #region  Event Handlers */
  onDeleteBtnClicked(data: Album<Photo>): void {
    this.delete.emit(data);
  }

  onRenameBtnClicked(data: Album<Photo>): void {
    this.rename.emit(data);
  }

  onSelectBtnClicked(data: Album<Photo>): void {
    this.select.emit(data);
  }
  /* #endregion */
}
