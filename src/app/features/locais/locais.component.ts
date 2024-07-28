import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../../services/locais.service';
import { Local } from '../../models/local.model';
import { TableConfig } from '../../models/table-config.model';


@Component({
  selector: 'locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {

  locais: Local[] = [];
  local: Local = { nome: '', rua: '', bairro: '', cidade: '', numero: '' };

  constructor(private locaisService: LocaisService) {}

  tableConfig: TableConfig = {
    columns: [
      { header: 'Nome',width:"20%", field: 'nome', type: 'text' },
      { header: 'Bairro',width:"10%", field: 'bairro', type: 'text' },
      { header: 'Rua',width:"20%", field: 'rua', type: 'text' },
      { header: 'Numero',width:"20%", field: 'numero', type: 'text' },
    ],
    actions: [
      {
        label: 'Remover',
        icon: 'pi pi-trash',
        action: (row: any, target:any) => {this.removeLocal(row.key)}
      },
    ]
  };

  ngOnInit() {
    this.locaisService.getLocais().subscribe(locais => {
      this.locais = locais;
    });
  }

  addLocal() {
    this.locaisService.addLocal(this.local);
    this.local = { nome: '', rua: '', bairro: '', cidade: '', numero: ''};
  }

  removeLocal(key: string) {
    this.locaisService.removeLocal(key);
  }
}
