import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent, PhotosComponent, VideosComponent } from './pages';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'album/:albumId',
    component: PhotosComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
