import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NgxFilesizeModule } from 'ngx-filesize';
import { FileUploaderComponent } from './components';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [FileUploaderComponent, TaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    NgxFilesizeModule,
  ],
  exports: [FileUploaderComponent, TaskComponent],
})
export class FileUploaderModule {}
