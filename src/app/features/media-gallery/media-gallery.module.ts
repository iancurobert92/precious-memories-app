import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from '@shared/shared.module';
import { MediaActionsComponent, MediaGridListComponent, MediaImageComponent, MediaVideoComponent } from './components';
import { MediaGalleryRoutingModule } from './media-gallery-routing.module';
import { MediaGalleryComponent } from './pages';
import { MediaTypePipe } from './pipes';

@NgModule({
  declarations: [
    MediaGalleryComponent,
    MediaTypePipe,
    MediaGridListComponent,
    MediaActionsComponent,
    MediaVideoComponent,
    MediaImageComponent,
  ],
  imports: [CommonModule, MediaGalleryRoutingModule, SharedModule, MatGridListModule],
})
export class MediaGalleryModule {}
