import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PhotoAlbumRoutingModule } from './photo-album-routing.module';
import { PhotoAlbumComponent } from './photo-album.component';

@NgModule({
  declarations: [
    PhotoAlbumComponent
  ],
  imports: [SharedModule, PhotoAlbumRoutingModule],
})
export class PhotoAlbumModule {}
