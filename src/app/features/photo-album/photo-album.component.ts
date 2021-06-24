import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Album, Photo } from "@core/models";
import { AlbumService } from "@core/services";
import { Task } from "@libs/file-uploader/models/task";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { UploadPhotoDialogComponent } from "./components/upload-photo-dialog/upload-photo-dialog.component";

@Component({
  selector: "app-photo-album",
  templateUrl: "./photo-album.component.html",
  styleUrls: ["./photo-album.component.scss"],
})
export class PhotoAlbumComponent implements OnInit, OnDestroy {
  /* #region  Public Properties */
  title: string = "";
  photos: Photo[] | undefined;
  /* #endregion */

  /* #region  Private Properties */
  private destroy$: Subject<void> = new Subject<void>();
  /* #endregion */

  constructor(private aS: AlbumService, private dialog: MatDialog, private route: ActivatedRoute) {}

  /* #region  Hook methods */
  ngOnInit(): void {
    let data$: Observable<Album<Photo>> | undefined;

    this.route.params.pipe(takeUntil(this.destroy$)).subscribe({
      next: (params: any) => {
        data$ = this.aS.getAlbum(params["albumId"]);
      },
    });

    data$?.pipe(takeUntil(this.destroy$)).subscribe({
      next: (album: Album<Photo>) => {
        this.title = album.name;
        this.photos = album.media;
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
  /* #endregion */

  /* #region  Event Handlers */
  onAddPhotoBtnClicked(): void {
    this.dialog.open(UploadPhotoDialogComponent);
  }

  onUploadComplete(tasks: Task[]): void {
    console.log(tasks);
  }
  /* #endregion */
}
