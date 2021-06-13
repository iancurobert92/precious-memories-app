import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoAlbumsComponent } from './photo-albums.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoAlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoAlbumsRoutingModule {}
