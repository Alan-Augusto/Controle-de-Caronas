import { Component } from '@angular/core';
import { Carona } from '../../models/carona.model';
import { Local } from '../../models/local.model';
import { CaronasService } from '../../services/caronas.service';
import { LocaisService } from '../../services/locais.service';
import { take } from 'rxjs';
import { withLoading } from '../../features-components/operators/with-loading.operator';
import { LoadingService } from '../../services/loading.service';
import { PassageirosServices } from '../../services/passageiros.service';
import { TableConfig } from '../../models/table-config.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ResumoCaronaComponent } from '../resumo-carona/resumo-carona.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'caronas',
  templateUrl: './caronas.component.html',
  styleUrl: './caronas.component.css'
})
export class CaronasComponent {
  caronas: any[] = [];

  carona: Carona = {
    descricao: '',
    idOrigem: 0,
    idDestino: 0,
    data: '',
    idPassageiros: []
  };

  locais: any[] = []
  passageiros: any[] = []

  constructor(
    private caronasService: CaronasService,
    private locaisService: LocaisService,
    private passageirosService: PassageirosServices,
    private loadingService: LoadingService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  tableConfig: TableConfig = {
    columns: [
      { header: 'Data',width:"20%", field: 'data', type: 'date' },
      { header: 'Origem',width:"20%", field: 'origem', type: 'text' },
      { header: '',width:"10%", field: '', type: 'icon', icon: 'pi pi-arrow-right' },
      { header: 'Destino',width:"10%", field: 'destino', type: 'text' },
    ],
    actions: [
      {
        label: 'Ver',
        icon: 'pi pi-eye',
        action: (row: any) => {this.abrirDialogResumoCarona(row)}
      },
      {
        label: 'Remover',
        icon: 'pi pi-trash',
        action: (row: any, target:any) => this.removeCarona(row.key, target)
      },
    ]
  };

  ngOnInit() {
    this.carregarPassageiros();
    //Se a tela for de celulat, não mostrar a ação de ver
    if(window.innerWidth < 768){
      this.tableConfig.actions = this.tableConfig.actions.filter(action => action.label !== 'Ver');  
    }
  }


  carregarPassageiros() {
    this.passageirosService.getPassageiros().pipe(
      withLoading(this.loadingService),
      take(1) // Finaliza a subscrição após receber o primeiro valor
    ).subscribe({
      next: passageiros => {
        this.passageiros = passageiros;
      },
      error: err => {
        console.error('Erro ao obter passageiros', err);
      },
      complete:()=>{
        this.carregaLocais();
      }
    });
  }

  carregaLocais() {
    this.locaisService.getLocais().pipe(
      withLoading(this.loadingService),
      take(1) // Finaliza a subscrição após receber o primeiro valor
    ).subscribe({
      next: locais => {
        this.locais = locais;
      },
      error: err => {
        console.error('Erro ao obter locais', err);
      },
      complete: () => {
        this.carregaCaronas();
      }
    });
  }

  carregaCaronas() {
    this.caronasService.getCaronas().pipe(
      withLoading(this.loadingService),
      take(1) // Finaliza a subscrição após receber o primeiro valor
    ).subscribe({
      next: caronas => {
        this.caronas = caronas;
        console.log(this.caronas);
      },
      error: err => {
        console.error('Erro ao obter caronas', err);
      },
      complete: () => {
        console.log('Caronas carregadas');
        this.carregaComplementosPorChave();
      }
    });
  }

  carregaComplementosPorChave() {
    // pegar o idOrigem e idDestino e buscar o bairro correspondente na lista de locais
    this.caronas.forEach(carona => {
      
      let origemLocal = this.locais.find((local:Local) => local.key === carona.idOrigem);
      let destinoLocal = this.locais.find((local:Local) => local.key === carona.idDestino);
  
      // Se encontrar o local correspondente, atribui apenas o bairro
      carona.origem = origemLocal ? origemLocal.bairro : null;
      carona.destino = destinoLocal ? destinoLocal.bairro : null;

      console.log(carona);
    });

    //Pegar a lista de ids de passegieros e buscar o nome correspondente na lista de passageiros
    this.caronas.forEach(carona => {
      carona.passageiros = carona.idPassageiros.map((id:any) => {
        let passageiro = this.passageiros.find(passageiro => passageiro.key === id);
        return passageiro ? passageiro.nome : null;
      });
    });
  }
  
  validateForm(carona: Carona) {
    if (!carona.descricao) {
      return false;
    }
    if (!carona.idOrigem) {
      return false;
    }
    if (!carona.idDestino) {
      return false;
    }
    if (!carona.data) {
      return false;
    }
    return true;
  }

  addCarona() {

    if(this.validateForm(this.carona)) {
      this.caronasService.addCarona({
        ...this.carona,
        data: this.carona.data.toString()
      });
  
      this.carona = {
        descricao: '',
        idOrigem: 0,
        idDestino: 0,
        data: '',
        idPassageiros: []
      };
  
      //atualizar a lista de caronas
      this.carregaCaronas();

    }else{
      this.messageService.add({ severity: 'error', summary: 'Atençaõ', detail: 'Preencha os Campos obrigatórios' });
    }

  }

  removeCarona(key: string, target:any) {
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
        this.caronasService.removePassageiro(key);
        this.messageService.add({ severity: 'info', summary: 'Confirmação', detail: 'Carona Removida!' });
        this.carregaCaronas();
      },
      reject: () => {}
  });

  }

  abrirDialogResumoCarona(carona: Carona) {
    //Abrir o dialog de resumo da carona
    console.log(carona);
    this.openDialog(ResumoCaronaComponent, carona);
  }

  openDialog(component: any, params: any) {
    this.dialogService.open(component, {
      data: params,
      header: 'Resumo da carona',
      width: '80%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

}
