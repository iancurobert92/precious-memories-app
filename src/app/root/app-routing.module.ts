import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';
import { AnonGuard } from '@core/guards/anon/anon.guard';
import { AuthLayoutComponent } from '@modules/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from '@modules/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'media',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('@features/media/media.module').then((m) => m.MediaModule),
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
