import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { AlbumsComponent, MediaGalleryComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MediaGalleryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaGalleryRoutingModule {}
