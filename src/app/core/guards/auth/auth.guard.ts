import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.as.isAuthenticated) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
