import { Injectable } from "@angular/core";
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { UploadStatus } from "@shared/enums/upload-status.enum";
import { UploadData } from "@shared/models";
import { BehaviorSubject, from, Observable, Subject } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class Uploader {
  private status: BehaviorSubject<UploadStatus> = new BehaviorSubject<UploadStatus>(UploadStatus.Default);
  private uploadData: Subject<UploadData> = new Subject<UploadData>();

  private basePath: string = "/uploads";

  constructor(private storage: AngularFireStorage) {}

  upload(file: File): UploadData {
    const fileName: string = `${new Date().getTime()}_${file.name}`;
    const path: string = `${this.basePath}/${fileName}`;
    const task: AngularFireUploadTask = this.storage.upload(path, file);

    return {
      file: file,
      storageLink: fileName,
      downloadUrl$: from(task).pipe(switchMap(() => this.storage.ref(path).getDownloadURL())),
      progress$: task.percentageChanges(),
    };
  }

  delete(name: string): void {
    this.storage.ref(this.basePath).child(name).delete();
  }

  setUploadData(value: UploadData): void {
    return this.uploadData.next(value);
  }

  getUploadData(): Observable<UploadData> {
    return this.uploadData.asObservable();
  }

  setUploadStatus(value: UploadStatus): void {
    this.status.next(value);
  }

  getUploadStatus(): Observable<UploadStatus> {
    return this.status.asObservable();
  }
}
