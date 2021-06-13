import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PhotoAlbumWidgetComponent } from './components';
import { PhotoAlbumsRoutingModule } from './photo-albums-routing.module';
import { PhotoAlbumsComponent } from './photo-albums.component';
import { CreateAlbumDialogComponent } from './components/create-album-dialog/create-album-dialog.component';

@NgModule({
  declarations: [
    PhotoAlbumsComponent,
    PhotoAlbumWidgetComponent,
    CreateAlbumDialogComponent,
  ],
  imports: [SharedModule, PhotoAlbumsRoutingModule],
})
export class PhotoAlbumsModule {}
