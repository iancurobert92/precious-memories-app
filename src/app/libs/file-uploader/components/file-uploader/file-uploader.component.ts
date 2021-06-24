import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { UploadStatus } from "@libs/file-uploader/enums";
import { FileUploaderConfig } from "@libs/file-uploader/models/file-uploader-config";
import { Task } from "@libs/file-uploader/models/task";
import { UploadService } from "@libs/file-uploader/services/upload.service";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { take, tap } from "rxjs/operators";

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
  @ViewChild("imgInputRef") imgInputRef!: ElementRef<HTMLInputElement>;
  /* #endregion */

  constructor(private us: UploadService) {}

  /* #region  Hook Methods */
  ngOnInit(): void {
    if (!this.config) {
      this.config = new FileUploaderConfig();
    }
    this.status = UploadStatus.NotStarted;
    this.tasks = this.us.tasks;
    this.fileInput = new FormControl(null, {
      validators: [RxwebValidators.required(), RxwebValidators.extension({ extensions: this.config?.extensions })],
    });
  }

  /* #endregion */

  /* #region  Event Handlers */
  onFileInputChanged(): void {
    const files: FileList | null = this.imgInputRef.nativeElement.files;
    if (files) this.us.createTasks(files);
    this.imgInputRef.nativeElement.files = this.us.files;
    this.fileInput.setValue(this.us.files);
  }

  onRemoveBtnClicked(id: string): void {
    this.us.removeTask(id);
    this.imgInputRef.nativeElement.files = this.us.files;
    this.fileInput.setValue(this.us.files);
    if (this.tasks.length == 0) {
      this.status = UploadStatus.NotStarted;
    }
  }

  onUploadBtnClicked(): void {
    this.status = UploadStatus.Started;
    this.us
      .uploadAll(this.config?.rootPath)
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.status = UploadStatus.Completed;
          this.uploadComplete.emit(this.tasks);
        },
      });
  }

  onClearBtnClicked(): void {
    this.status = UploadStatus.NotStarted;
    this.fileInput.setValue(null);
    this.imgInputRef.nativeElement.value = "";
    this.us.removeAll();
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
