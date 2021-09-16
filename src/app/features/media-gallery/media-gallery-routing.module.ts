import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent, MediaGalleryComponent } from './pages';

const routes: Routes = [
  {
    path: 'photos',
    component: MediaGalleryComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaGalleryRoutingModule {}
