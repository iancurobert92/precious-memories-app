import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FileUploaderComponent, UploadStatusComponent } from "./components";

@NgModule({
  declarations: [FileUploaderComponent, UploadStatusComponent],
  imports: [CommonModule, MatProgressBarModule, MatProgressBarModule],
  exports: [FileUploaderComponent, UploadStatusComponent],
})
export class FileUploaderModule {}
