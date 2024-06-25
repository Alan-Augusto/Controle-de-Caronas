import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../../services/locais.service';
import { Local } from '../../models/local.model';


@Component({
  selector: 'locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {

  locais: Local[] = [];
  local: Local = { nome: '', rua: '', bairro: '', cidade: '', numero: '', img: '' };

  constructor(private locaisService: LocaisService) {}

  ngOnInit() {
    this.locaisService.getLocais().subscribe(locais => {
      this.locais = locais;
    });
  }

  addLocal() {
    this.locaisService.addLocal(this.local);
    this.local = { nome: '', rua: '', bairro: '', cidade: '', numero: '', img: '' };
  }

  removeLocal(key: string) {
    this.locaisService.removeLocal(key);
  }
}
