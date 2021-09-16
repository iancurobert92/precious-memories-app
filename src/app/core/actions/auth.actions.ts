import { User } from '@core/models';

export class SignUp {
  static readonly type = '[Auth] SignUp';
  constructor(public payload: { username: string; password: string }) {}
}

export class SignIn {
  static readonly type = '[Auth] SignIn';
  constructor(public payload: { username: string; password: string }) {}
}

export class SignOut {
  static readonly type = '[Auth] SignOut';
}
