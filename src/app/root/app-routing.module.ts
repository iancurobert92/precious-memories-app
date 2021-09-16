import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { AnonGuard } from '@core/guards/anon/anon.guard';
import { MainLayoutComponent } from './layouts';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('@features/media-gallery/media-gallery.module').then((m) => m.MediaGalleryModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () => import('@features/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AnonGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
