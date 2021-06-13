export interface Album<T> {
  id: string;
  name: string;
  media?: T[];
}
