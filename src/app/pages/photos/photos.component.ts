import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Photo } from "@core/models";
import { PhotoService } from "@core/services";
import { UploadStatusDialogComponent } from "@shared/components";
import { UploadStatus } from "@shared/enums";
import { Uploader } from "@shared/services";
import { Subject } from "rxjs";
import { map, takeLast, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"],
})
export class PhotosComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private ps: PhotoService, private dialog: MatDialog, private uploader: Uploader) {}

  ngOnInit(): void {
    //Get photos from the database and sort them by upload date.
    this.ps
      .getPhotos()
      .pipe(
        takeUntil(this.destroy$),
        map((value) => {
          this.photos = value
            .map((data) => data.payload.doc.data() as Photo)
            .sort((a, b) => {
              if (a.uploadDate > b.uploadDate) return 1;
              if (a.uploadDate < b.uploadDate) return -1;
              return 0;
            });
        })
      )
      .subscribe();

    //Add a new photo to the database
    this.uploader
      .getUploadData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          let photo: Photo = {
            id: "",
            uploadDate: new Date().getTime(),
            name: data.file.name,
            description: "",
            url: "",
            storageLink: data.storageLink,
          };
          data.downloadUrl$.pipe(takeUntil(this.destroy$), takeLast(1)).subscribe({
            next: (url) => {
              if (url) photo.url = url;
            },
            complete: () => {
              this.ps.createPhoto(photo);
            },
          });
        },
      });

    //Display the upload progress/loading animation
    let dialogRef: MatDialogRef<UploadStatusDialogComponent>;
    this.uploader.getUploadStatus().subscribe({
      next: (value) => {
        switch (value) {
          case UploadStatus.Uploading:
            dialogRef = this.dialog.open(UploadStatusDialogComponent, { width: "500px", disableClose: true });
            break;
          case UploadStatus.Error:
            //display an error message
            break;
          case UploadStatus.Complete:
            dialogRef.close();
            break;
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onRemoveBtnClick(data: Photo): void {
    this.ps.deletePhoto(data).then(() => this.uploader.delete(data.storageLink));
  }
}
