import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import { FileUploaderModule } from '@modules/file-uploader/file-uploader.module';
import { FileUploaderService } from '@modules/file-uploader/services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards';
import { AuthService } from './services';

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
  providers: [AuthGuard, AuthService, FileUploaderService],
})
export class CoreModule {}
