import { MediaItem, User } from '@core/models';

export class FetchItems {
  static readonly type = '[Media] Fetch Items';
  constructor(public payload: User) {}
}

export class AddItem {
  static readonly type = '[Media] Add Items';
  constructor(public payload: { user: User; item: MediaItem }) {}
}

export class DeleteItem {
  static readonly type = '[Media] Delete Items';
  constructor(public payload: { user: User; item: MediaItem }) {}
}

export class SelectItem {
  static readonly type = '[Media] Select Item';
  constructor(public payload: MediaItem) {}
}

export class DeselectItem {
  static readonly type = '[Media] Deselect Item';
  constructor(public payload: MediaItem) {}
}

export class DeselectOthers {
  static readonly type = '[Media] Deselect Others';
  constructor(public payload: MediaItem) {}
}

export class ResetSelection {
  static readonly type = '[Media] Reset Selection';
}
