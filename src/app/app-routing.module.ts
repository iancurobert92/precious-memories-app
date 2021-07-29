import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumComponent } from "@pages/album/album.component";
import { AlbumsComponent } from "@pages/albums/albums.component";
import { PhotosComponent } from "@pages/photos/photos.component";

const routes: Routes = [
  {
    path: "",
    component: PhotosComponent,
  },
  {
    path: "albums",
    component: AlbumsComponent,
  },
  {
    path: "albums/:albumId",
    component: AlbumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
