import { Observable } from 'rxjs';

export interface UploadData {
  file: File;
  storageLink: string;
  downloadUrl$: Observable<string | undefined>;
  progress$: Observable<number | undefined>;
}
