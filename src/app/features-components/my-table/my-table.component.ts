import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableAction, TableConfig } from '../../models/table-config.model';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent implements OnInit {
  @Input() datasource: any[] = [];
  @Input() config: TableConfig | undefined;
  @Output() clickedRow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  performAction(action: TableAction, row: any, target:any): void {
    if (action && action.action) {
      action.action(row, target);
    }
  }

  formatDate(data: string) {
    //FORMATO brasileiro - apenas dia e mes
    return new Date(data).toLocaleDateString('pt-BR').split('/').slice(0, 2).join('/');
  }

  calcularLarguraActions(actions?:TableAction[]){
    if(!actions){
      return '0%';
    }
    return (actions.length * 1.5) + '%';
  }
}
