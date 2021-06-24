import { Injectable } from "@angular/core";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/storage";
import { forkJoin, merge, Observable, of } from "rxjs";
import { finalize, map, mergeAll, mergeMap, tap } from "rxjs/operators";
import { Task } from "../models/task";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  private _tasks: Task[] = [];

  constructor(private storage: AngularFireStorage) {}

  /* #region  Getters & Setters */
  get tasks(): Task[] {
    return this._tasks;
  }

  get files(): FileList {
    let list: DataTransfer = new DataTransfer();
    this._tasks.forEach((task) => {
      if (task.file) list.items.add(task.file);
    });

    return list.files;
  }
  /* #endregion */

  /* #region  Public Methods */
  createTask(file: File): void {
    const task: Task = {
      file: file,
      progress: 0,
    };
    if (this.taskExists(task)) return;
    this._tasks.push(task);
  }

  createTasks(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const crtFile: File | null = files.item(i);
      if (crtFile) {
        this.createTask(crtFile);
      }
    }
  }

  removeTask(name: string): void {
    const index: number = this._tasks.findIndex((task) => task.file.name == name);
    if (index >= 0) this._tasks.splice(index, 1);
  }

  removeAll(): void {
    while (this._tasks.length > 0) this._tasks.pop();
  }

  uploadAll(basePath?: string): Observable<any> {
    let observables: Observable<any>[] = [];
    this._tasks.map((task) => observables.push(this.startTask(task, basePath)));
    return forkJoin(observables);
  }
  /* #endregion */

  /* #region  Helper Methods */
  private taskExists(task: Task): boolean {
    for (let i = 0; i < this._tasks.length; i++) {
      const currentTask: Task = this._tasks[i];
      if (task.file.name == currentTask.file.name) return true;
    }
    return false;
  }

  private startTask(task: Task, basePath?: string): Observable<any> {
    const filePath: string = `${basePath}/${task.file.name}`;
    const storageRef: AngularFireStorageReference = this.storage.ref(filePath);
    const uploadTask: AngularFireUploadTask = this.storage.upload(filePath, task.file);
    const snapshot = uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe((url) => {
          task.downloadUrl = url;
        });
      })
    );
    const progress = uploadTask.percentageChanges().pipe(map((progress) => (task.progress = progress)));
    return forkJoin([progress, snapshot]).pipe(mergeAll(2));
  }
  /* #endregion */
}
