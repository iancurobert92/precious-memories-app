import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photos',
    loadChildren: () =>
      import('@features/photo-albums/photo-albums.module').then(
        (m) => m.PhotoAlbumsModule
      ),
  },
  {
    path: 'photos/:albumId',
    loadChildren: () =>
      import('@features/photo-album/photo-album.module').then(
        (m) => m.PhotoAlbumModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
