import { Injectable } from "@angular/core";
import { Photo } from "@core/models";
import { map } from "rxjs/operators";
import { WebRequestService } from "../web-request/web-request.service";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private wrs: WebRequestService) {}

  getPhotos() {
    return this.wrs.get("media").pipe(
      map((value) => {
        return value
          .map((data) => data.payload.doc.data() as Photo)
          .sort((a, b) => {
            if (a.uploadDate > b.uploadDate) return 1;
            if (a.uploadDate < b.uploadDate) return -1;
            return 0;
          });
      })
    );
  }

  createPhoto(photo: Photo) {
    return this.wrs.post("media", photo).then((docRef) => {
      docRef.update({ id: docRef.id });
    });
  }

  deletePhoto(photo: Photo) {
    return this.wrs.delete("media", photo.id);
  }
}
