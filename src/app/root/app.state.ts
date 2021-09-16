import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<any>({
  name: 'app',
  defaults: [],
})
@Injectable()
export class AppState {}
