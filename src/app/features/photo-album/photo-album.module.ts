import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumComponent } from './photo-album.component';
import { UploadPhotoDialogComponent } from './components/upload-photo-dialog/upload-photo-dialog.component';

@NgModule({
  declarations: [
    PhotoAlbumComponent,
    UploadPhotoDialogComponent
  ],
  imports: [SharedModule, PhotoAlbumRoutingModule],
})
export class PhotoAlbumModule {}
