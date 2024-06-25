import { Component, Input, OnInit } from '@angular/core';
import { TableAction, TableConfig } from '../../models/table-config.model';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent implements OnInit {
  @Input() datasource: any[] = [];
  @Input() config: TableConfig | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  performAction(action: TableAction, row: any): void {
    if (action && action.action) {
      action.action(row);
    }
  }

  formatDate(data: string) {
    //FORMATO brasileiro
    return new Date(data).toLocaleDateString('pt-BR');
  }
}
