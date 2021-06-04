import { Photo } from './photo';

export interface Album {
  id: string;
  name: string;
  photos?: Photo[];
}
