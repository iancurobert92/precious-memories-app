import { Injectable } from "@angular/core";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/storage";
import { UploadTaskRef } from "../models/upload-task-ref";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor(private storage: AngularFireStorage) {}

  uploadFile(basePath: string, file: File): UploadTaskRef {
    const filePath = `${basePath}/${Date.now()}_${file.name}`;
    return {
      uploadTask: this.storage.upload(filePath, file),
      storageRef: this.storage.ref(filePath),
    };
  }

  deleteFile(): void {}
}
