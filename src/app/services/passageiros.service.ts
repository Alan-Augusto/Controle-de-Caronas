import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Passageiro } from '../models/passageiro.model';

@Injectable({
  providedIn: 'root'
})
export class PassageirosServices {

  private basePath = '/passageiros';
  passageirosRef: AngularFireList<Passageiro>;

  constructor(private db: AngularFireDatabase) {
    this.passageirosRef = db.list(this.basePath);
  }

  addPassageiro(passageiro: Passageiro): void {
    this.passageirosRef.push(passageiro);
  }

  getPassageiros(): Observable<Passageiro[]> {
    return this.passageirosRef.snapshotChanges().pipe(
      map((changes:any) =>
        changes.map((c:any) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  removePassageiro(key: string): void {
    this.passageirosRef.remove(key);
  }
}
