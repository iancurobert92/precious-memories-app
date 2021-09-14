import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { User } from '@core/models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth, private afs: AngularFirestore, private router: Router) {}

  get isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  signUp(email: string, password: string) {
    return this.afa
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['login']);
        const user: User = { id: res.user?.uid };
        this.afs.collection('users').doc(user.id).set(user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signIn(email: string, password: string) {
    return this.afa
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['']);
        localStorage.setItem('user', JSON.stringify(res.user));
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {
    return this.afa
      .signOut()
      .then((res) => {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
