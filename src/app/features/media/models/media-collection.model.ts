import { MediaItem } from '@core/models';

export class MediaCollection {
  constructor(public date: string, public media: MediaItem[], public location?: string) {}
}
