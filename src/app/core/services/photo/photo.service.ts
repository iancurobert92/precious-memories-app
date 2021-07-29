import { Injectable } from "@angular/core";
import { Photo } from "@core/models";
import { WebRequestService } from "../web-request/web-request.service";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  constructor(private wrs: WebRequestService) {}

  getPhotos() {
    return this.wrs.get("media");
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
