import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { RouterModule } from "@angular/router";
import { FileUploaderModule } from "@modules/file-uploader/file-uploader.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FileUploaderModule,
  ],
  exports: [NgbModule, FileUploaderModule],
})
export class CoreModule {}
