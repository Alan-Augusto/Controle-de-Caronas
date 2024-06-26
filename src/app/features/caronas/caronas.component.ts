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
    private loadingService: LoadingService
  ) { }

  tableConfig: TableConfig = {
    columns: [
      { header: 'Descrição',width:"10%", field: 'descricao', type: 'text' },
      { header: 'Origem',width:"10%", field: 'origem', type: 'text' },
      { header: '',width:"5%", field: '', type: 'icon', icon: 'pi pi-arrow-right' },
      { header: 'Destino',width:"10%", field: 'destino', type: 'text' },
      { header: 'Data',width:"20%", field: 'data', type: 'date' }
    ],
    actions: [
      {
        label: 'Remover',
        icon: 'pi pi-trash',
        action: (row: any) => this.removeCarona(row.key)
      }
    ]
  };

  ngOnInit() {
    this.carregarPassageiros();
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
      },
      error: err => {
        console.error('Erro ao obter caronas', err);
      },
      complete: () => {
        this.carregaLocaisPorChave();
      }
    });
  }

  carregaLocaisPorChave() {
    // pegar o idOrigem e idDestino e buscar o bairro correspondente na lista de locais
    this.caronas.forEach(carona => {
      let origemLocal = this.locais.find(local => local.key === carona.idOrigem);
      let destinoLocal = this.locais.find(local => local.key === carona.idDestino);
  
      // Se encontrar o local correspondente, atribui apenas o bairro
      carona.origem = origemLocal ? origemLocal.bairro : null;
      carona.destino = destinoLocal ? destinoLocal.bairro : null;
    });
  }
  

  addCarona() {
    console.log(this.carona)
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
  }

  removeCarona(key: string) {
    this.caronasService.removePassageiro(key);
    this.carregaCaronas();
  }

}
