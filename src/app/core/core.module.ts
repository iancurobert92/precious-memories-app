import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AlbumComponent } from "@pages/album/album.component";
import { AlbumsComponent } from "@pages/albums/albums.component";
import { PhotosComponent } from "@pages/photos/photos.component";
import { SharedModule } from "@shared/shared.module";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AlbumsComponent, PhotosComponent, AlbumComponent],
  imports: [
    RouterModule,
    SharedModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [NgbModule, SharedModule],
})
export class CoreModule {}
