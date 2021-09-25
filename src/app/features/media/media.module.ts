import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '@shared/shared.module';
import { MediaActionsComponent, MediaGridListComponent, MediaImageComponent, MediaVideoComponent } from './components';
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './pages';
import { MediaTypePipe } from './pipes';
import { MediaState } from './store';

@NgModule({
  declarations: [
    MediaComponent,
    MediaTypePipe,
    MediaGridListComponent,
    MediaActionsComponent,
    MediaVideoComponent,
    MediaImageComponent,
  ],
  imports: [MediaRoutingModule, SharedModule, MatGridListModule, NgxsModule.forFeature([MediaState])],
})
export class MediaModule {}
