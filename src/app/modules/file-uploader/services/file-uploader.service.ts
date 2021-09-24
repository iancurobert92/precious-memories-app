import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UploadStatus } from '../enums';
import { UploadData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FileUploaderService {
  private status: BehaviorSubject<UploadStatus> = new BehaviorSubject<UploadStatus>(UploadStatus.Default);
  private uploadData: Subject<UploadData> = new Subject<UploadData>();

  constructor(private storage: AngularFireStorage) {}

  upload(file: File, basePath: string): UploadData {
    const fileName: string = `${new Date().getTime()}_${file.name}`;
    const path: string = `${basePath}/${fileName}`;
    const task: AngularFireUploadTask = this.storage.upload(path, file);

    return {
      file: file,
      storageLink: fileName,
      downloadUrl$: from(task).pipe(switchMap(() => this.storage.ref(path).getDownloadURL())),
      progress$: task.percentageChanges(),
    };
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
