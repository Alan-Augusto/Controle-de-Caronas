import { Component } from '@angular/core';
import { PassageirosServices } from '../../services/passageiros.service';
import { Passageiro } from '../../models/passageiro.model';
import { TableConfig } from '../../models/table-config.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'passageiros',
  templateUrl: './passageiros.component.html',
  styleUrl: './passageiros.component.css'
})
export class PassageirosComponent {

  passageiros: Passageiro[] = [];
  passageiro: Passageiro = {
    nome: '',
    email: '',
    telefone: '',
    img: '',
    ativo: true
  };

  constructor(
    private passageirosService: PassageirosServices,
    private loadingService: LoadingService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  tableConfig: TableConfig = {
    columns: [
      { header: 'Nome',width:"15%", field: 'nome', type: 'text' },
      { header: 'Telefone',width:"35%", field: 'telefone', type: 'text' },
      { header: 'Email',width:"50%", field: 'email', type: 'text' },
    ],
    actions: [
      {
        label: 'Remover',
        icon: 'pi pi-trash',
        action: (row: any, target:any) => {this.removePassageiro(row.key, target)}
      },
    ]
  };

  ngOnInit() {
    this.passageirosService.getPassageirosAtivos().subscribe(passageiros => {
      this.passageiros = passageiros;
    });
  }

  addPassageiro() {
    this.passageirosService.addPassageiro(this.passageiro);
    this.passageiro = {
      nome: '',
      email: '',
      telefone: '',
      img: '',
      ativo: true
    };
  }

  removePassageiro(key: string, target:any) {
    this.confirmationService.confirm({
      target: target,
      message: 'Certeza que deseja excluir o registro?',
      header: 'Exclusão de Registro',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      acceptLabel:"Excluir",
      rejectLabel:"Cancelar",

      accept: () => {
        this.passageirosService.removePassageiro(key);
        this.messageService.add({ severity: 'info', summary: 'Confirmação', detail: 'Amigo Removido!' });
      },
      reject: () => {}
    });
  }

}
