import { Component } from '@angular/core';
import { Carona } from '../../models/carona.model';
import { Local } from '../../models/local.model';
import { CaronasService } from '../../services/caronas.service';
import { LocaisService } from '../../services/locais.service';
import { take } from 'rxjs';
import { withLoading } from '../../features-components/operators/with-loading.operator';
import { LoadingService } from '../../services/loading.service';
import { PassageirosServices } from '../../services/passageiros.service';

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
    data: new Date(),
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
        console.log("1")
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
        console.log("2")
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
        console.log("3")
        this.carregaLocaisPorChave();
      }
    });
  }

  carregaLocaisPorChave() {
    //pegar o idorigem e iddestino e buscar o local correspondente na lista de locais
    this.caronas.forEach(carona => {
      carona.origem = this.locais.find(local => local.key === carona.idOrigem);
      carona.destino = this.locais.find(local => local.key === carona.idDestino);
    });
    console.log("3")
  }


  addCarona() {
    console.log(this.carona)
    // this.caronasService.addCarona(this.carona);
    this.carona = {
      descricao: '',
      idOrigem: 0,
      idDestino: 0,
      data: new Date(),
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
