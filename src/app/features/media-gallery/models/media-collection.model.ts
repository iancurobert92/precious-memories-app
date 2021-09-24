import { MediaItem } from '@core/models';

export interface MediaCollection {
  location?: string;
  date: string;
  media: MediaItem[];
}
