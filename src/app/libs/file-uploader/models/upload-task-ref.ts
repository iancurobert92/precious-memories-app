import { AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/storage";

export interface UploadTaskRef {
  uploadTask: AngularFireUploadTask;
  storageRef: AngularFireStorageReference | undefined;
}
