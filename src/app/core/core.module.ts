import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { environment } from 'src/environments/environment';
import { FooterComponent, HeaderComponent } from './components';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    RouterModule,
    SharedModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [HeaderComponent, FooterComponent, NgbModule, SharedModule],
})
export class CoreModule {}
