import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthState } from '@core/states';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): boolean {
    if (this.store.selectSnapshot(AuthState.isAuthenticated)) {
      return true;
    }
    this.store.dispatch(new Navigate(['login']));
    return false;
  }
}
