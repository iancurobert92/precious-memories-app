import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { UploadTaskSnapshot } from "@angular/fire/storage/interfaces";
import { FormControl } from "@angular/forms";
import { UploadStatus } from "@libs/file-uploader/enums";
import { FileUploaderConfig } from "@libs/file-uploader/models/file-uploader-config";
import { Task } from "@libs/file-uploader/models/task";
import { TasksManager } from "@libs/file-uploader/services/tasks-manager.service";
import { UploadService } from "@libs/file-uploader/services/upload.service";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { forkJoin, Observable, of } from "rxjs";
import { concatAll, finalize, mergeAll, take, takeLast, tap } from "rxjs/operators";

@Component({
  selector: "ir-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.scss"],
})
export class FileUploaderComponent implements OnInit {
  /* #region  Public Properties */
  tasks: Task[] = [];
  fileInput!: FormControl;
  /* #endregion */

  /* #region  Private Properties */
  private status: UploadStatus = UploadStatus.NotStarted;
  /* #endregion */

  /* #region  Input Properties */
  @Input() config!: FileUploaderConfig | undefined;
  /* #endregion */

  /* #region  Output Properties */
  @Output() uploadComplete: EventEmitter<Task[]> = new EventEmitter<Task[]>();
  /* #endregion */

  /* #region  View Queries */
  @ViewChild("fileInputRef") fileInputRef!: ElementRef<HTMLInputElement>;
  /* #endregion */

  constructor(private us: UploadService, private tm: TasksManager) {}

  /* #region  Hook Methods */
  ngOnInit(): void {
    if (!this.config) {
      this.config = new FileUploaderConfig();
    }
    this.status = UploadStatus.NotStarted;
    this.tasks = this.tm.tasks;
    this.fileInput = new FormControl(null, {
      validators: [RxwebValidators.required(), RxwebValidators.extension({ extensions: this.config?.extensions })],
    });
  }

  /* #endregion */

  /* #region  Event Handlers */
  onFileInputChanged(): void {
    const files: FileList | null = this.fileInputRef.nativeElement.files;
    if (files == null) return;

    for (let i = 0; i < files.length; i++) {
      const file: File | null = files.item(i);
      if (file) {
        const task: Task = {
          id: file.name,
          file: file,
        };
        if (!this.tm.tasks.find((value) => task.id == value.id)) this.tm.addTask(task);
      }
    }
    this.updateFileInputForm(this.tm.tasks);
  }

  onRemoveBtnClicked(id: string): void {
    this.tm.removeTask(id);
    if (this.tasks.length == 0) {
      this.status = UploadStatus.NotStarted;
    }
    this.updateFileInputForm(this.tm.tasks);
  }

  onUploadBtnClicked(): void {
    this.status = UploadStatus.Started;

    const progressArr: Observable<number | undefined>[] = [];
    this.tm.tasks.forEach((task) => {
      const uploadTaskRef = this.us.uploadFile("/test", task.file);

      task.progress = uploadTaskRef.uploadTask.percentageChanges();
      progressArr.push(task.progress);

      uploadTaskRef.uploadTask
        .snapshotChanges()
        .pipe(
          takeLast(1),
          finalize(() => {
            task.downloadUrl = uploadTaskRef.storageRef?.getDownloadURL();
          })
        )
        .subscribe();
    });

    forkJoin(progressArr)
      .pipe(
        take(1),
        finalize(() => {
          this.status = UploadStatus.Completed;
          this.uploadComplete.emit(this.tm.tasks);
        })
      )
      .subscribe();
  }

  onClearBtnClicked(): void {
    this.status = UploadStatus.NotStarted;
    this.tm.clearTasks();
    this.updateFileInputForm(this.tm.tasks);
  }
  /* #endregion */

  /* #region  Private Methods */
  private updateFileInputForm(tasks: Task[]): void {
    if (tasks.length > 0) {
      let list = new DataTransfer();
      tasks.forEach((task) => list.items.add(task.file));
      this.fileInput.setValue(list.files);
      this.fileInputRef.nativeElement.files = list.files;
    } else {
      this.fileInput.setValue(null);
      this.fileInputRef.nativeElement.value = "";
    }
  }
  /* #endregion */

  /* #region  Getters and Settrs */
  get isAddButtonEnabled(): boolean {
    return this.status == UploadStatus.NotStarted || (this.status == UploadStatus.Completed && this.tasks.length == 0);
  }

  get isUploadButtonVisible(): boolean {
    return this.status != UploadStatus.Completed || (this.status == UploadStatus.Completed && this.tasks.length == 0);
  }
  get isUploadButtonEnabled(): boolean {
    return this.status == UploadStatus.NotStarted && this.tasks.length > 0;
  }

  get isClearButtonVisible(): boolean {
    return this.status == UploadStatus.Completed && this.tasks.length > 0;
  }

  get isTaskActive(): boolean {
    return this.status === UploadStatus.Started;
  }
  /* #endregion */
}
