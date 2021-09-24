import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '@shared/shared.module';
import { MediaActionsComponent, MediaGridListComponent, MediaImageComponent, MediaVideoComponent } from './components';
import { MediaGalleryRoutingModule } from './media-gallery-routing.module';
import { MediaGalleryComponent } from './pages';
import { MediaTypePipe } from './pipes';
import { MediaState } from './store';

@NgModule({
  declarations: [
    MediaGalleryComponent,
    MediaTypePipe,
    MediaGridListComponent,
    MediaActionsComponent,
    MediaVideoComponent,
    MediaImageComponent,
  ],
  imports: [MediaGalleryRoutingModule, SharedModule, MatGridListModule, NgxsModule.forFeature([MediaState])],
})
export class MediaGalleryModule {}
