import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Photo } from "@core/models";
import { PhotoService } from "@core/services";
import { UploadStatusDialogComponent } from "@shared/components";
import { UploadStatus } from "@shared/enums";
import { Uploader } from "@shared/services";
import { Subject } from "rxjs";
import { takeLast, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private uploader: Uploader, private ps: PhotoService, private dialog: MatDialog) {}

  ngOnInit(): void {
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
    this.uploader
      .getUploadStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (status) => {
          switch (status) {
            case UploadStatus.Uploading:
              dialogRef = this.dialog.open(UploadStatusDialogComponent, { width: "300px", disableClose: true });
              break;
            case UploadStatus.Error:
              //display an error message
              break;
            case UploadStatus.Complete:
              if (dialogRef) dialogRef.close();
              break;
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
