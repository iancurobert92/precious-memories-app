import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class WebRequestService {
  constructor(private db: AngularFirestore) {}

  get(uri: string) {
    return this.db.collection(uri).snapshotChanges();
  }

  post(uri: string, data: any) {
    return this.db.collection(uri).add(data);
  }

  patch() {}

  delete(uri: string, id: string) {
    return this.db.collection(uri).doc(id).delete();
  }
}
