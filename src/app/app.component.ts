import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Photo } from "@core/models";
import { PhotoService } from "@core/services";
import { UploadStatusComponent } from "@shared/components";
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

  constructor(private uploader: Uploader, private ps: PhotoService, private snackbar: MatSnackBar) {}

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
    this.uploader
      .getUploadStatus()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (status) => {
          switch (status) {
            case UploadStatus.Uploading:
              this.snackbar.openFromComponent(UploadStatusComponent, {
                horizontalPosition: "start",
                verticalPosition: "bottom",
              });
              break;
            case UploadStatus.Error:
            case UploadStatus.Complete:
              this.snackbar.dismiss();
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
