import { Observable } from "rxjs";

export interface Task {
  id: string;
  file: File;
  progress?: Observable<number | undefined>;
  downloadUrl?: Observable<string | undefined>;
}
