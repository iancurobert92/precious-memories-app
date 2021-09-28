import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { SignIn, SignOut, SignUp } from '@core/actions';
import { User } from '@core/models';
import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface AuthStateModel {
  user: User | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static user(state: AuthStateModel): User | null {
    return state.user;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.user != null;
  }

  constructor(private authService: AngularFireAuth, private db: AngularFirestore, private router: Router) {}

  @Action(SignUp)
  signUp(ctx: StateContext<AuthStateModel>, action: SignUp) {
    return this.authService
      .createUserWithEmailAndPassword(action.payload.username, action.payload.password)
      .then((res) => {
        if (!res.user) return;
        const user: User = { id: res.user.uid };
        ctx.dispatch(new Navigate(['']));
        this.db.collection('users').doc(user.id).set(user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  @Action(SignIn)
  signIn(ctx: StateContext<AuthStateModel>, action: SignIn) {
    return this.authService
      .signInWithEmailAndPassword(action.payload.username, action.payload.password)
      .then((res) => {
        if (!res.user) return;
        const user: User = new User(res.user.uid);
        ctx.patchState({
          user: user,
        });
        ctx.dispatch(new Navigate(['']));
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  @Action(SignOut)
  signOut(ctx: StateContext<AuthStateModel>) {
    return this.authService
      .signOut()
      .then(() => {
        ctx.patchState({
          user: null,
        });
        ctx.dispatch(new Navigate(['login']));
      })
      .catch((error) => {
        window.alert(error);
      });
  }
}
