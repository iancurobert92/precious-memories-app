import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from '@shared/shared.module';
import { AlbumWidgetComponent } from './components';
import { AlbumDialogComponent } from './components/album-dialog/album-dialog.component';
import { MediaRoutingModule } from './media-routing.module';
import { AlbumsComponent, PhotosComponent, VideosComponent } from './pages';

@NgModule({
  declarations: [
    PhotosComponent,
    VideosComponent,
    AlbumWidgetComponent,
    AlbumDialogComponent,
    AlbumsComponent,
  ],
  imports: [
    SharedModule,
    MediaRoutingModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class MediaModule {}
