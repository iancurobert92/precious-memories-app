import { Component, OnInit } from "@angular/core";
import { Photo } from "@core/models";
import { PhotoService } from "@core/services";
import { Uploader } from "@shared/services";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"],
})
export class PhotosComponent implements OnInit {
  photos$?: Observable<Photo[]>;

  constructor(private ps: PhotoService, private uploader: Uploader) {}

  ngOnInit(): void {
    this.photos$ = this.ps.getPhotos();
  }

  onRemoveBtnClick(data: Photo): void {
    this.ps.deletePhoto(data).then(() => this.uploader.delete(data.storageLink));
  }
}
