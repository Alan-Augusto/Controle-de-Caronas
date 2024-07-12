import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'resumo-carona',
  templateUrl: './resumo-carona.component.html',
  styleUrl: './resumo-carona.component.css'
})
export class ResumoCaronaComponent {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  
  carona: any ={ }


  ngOnInit() {
    if(this.config.data) this.carona = this.config.data;
  }

  formatDate(data: string) {
    //FORMATO brasileiro - apenas dia e mes
    return new Date(data).toLocaleDateString('pt-BR');
  }

}
