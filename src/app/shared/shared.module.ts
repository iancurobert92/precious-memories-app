import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  exports: [CommonModule, RouterModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule],
})
export class SharedModule {}
