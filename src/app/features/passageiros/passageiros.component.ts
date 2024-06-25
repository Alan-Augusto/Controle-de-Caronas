import { Component } from '@angular/core';
import { PassageirosServices } from '../../services/passageiros.service';
import { Passageiro } from '../../models/passageiro.model';

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
    img: ''
  };

  constructor(private passageirosService: PassageirosServices) {}

  ngOnInit() {
    this.passageirosService.getPassageiros().subscribe(passageiros => {
      this.passageiros = passageiros;
    });
  }

  addPassageiro() {
    this.passageirosService.addPassageiro(this.passageiro);
    this.passageiro = {
      nome: '',
      email: '',
      telefone: '',
      img: ''
    };
  }

  removePassageiro(key: string) {
    this.passageirosService.removePassageiro(key);
  }

}
