import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { environment } from 'src/environments/environment';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    RouterModule,
    SharedModule,
    NgbModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [NavComponent, NgbModule, MatSidenavModule, SharedModule],
})
export class CoreModule {}
