import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Carona } from '../models/carona.model';

@Injectable({
  providedIn: 'root'
})
export class CaronasService {
  private basePath = '/caronas';
  caronasRef: AngularFireList<Carona>;

  constructor(private db: AngularFireDatabase) {
    this.caronasRef = db.list(this.basePath);
  }

  addCarona(carona: Carona): void {
    this.caronasRef.push(carona);
  }

  getCaronas(): Observable<Carona[]> {
    return this.caronasRef.snapshotChanges().pipe(
      map((changes:any) =>
        changes.map((c:any) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  removePassageiro(key: string): void {
    this.caronasRef.remove(key);
  }
}
