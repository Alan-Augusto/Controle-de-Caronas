import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Local } from '../models/local.model';

@Injectable({
  providedIn: 'root'
})
export class LocaisService {

  private basePath = '/locais';
  locaisRef: AngularFireList<Local>;

  constructor(private db: AngularFireDatabase) {
    this.locaisRef = db.list(this.basePath);
  }

  addLocal(local: Local): void {
    this.locaisRef.push(local);
  }

  getLocais(): Observable<Local[]> {
    return this.locaisRef.snapshotChanges().pipe(
      map((changes:any) =>
        changes.map((c:any) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  removeLocal(key: string): void {
    this.locaisRef.remove(key);
  }
}
