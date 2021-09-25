import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './pages';

const routes: Routes = [
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: '',
    redirectTo: 'media',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
