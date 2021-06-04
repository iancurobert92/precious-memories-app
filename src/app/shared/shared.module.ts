import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

@NgModule({
  declarations: [FileUploaderComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FileUploaderComponent,
    ConfirmationDialogComponent,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class SharedModule {}
