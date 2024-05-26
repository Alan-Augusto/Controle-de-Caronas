import { Component } from '@angular/core';
import { Passageiro } from '../../models/app.models';
import { AuthService } from '../../auth.service';
import { PrimeNGConfig } from 'primeng/api';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  descricao: string = '';
  data: string = '';
  passageiros: Passageiro[] = [];

  forNewNome:string = '';
  forNewImg:string = '';
  forNewTelefone:string = '';

  listRef: any;

  constructor(
    public authService: AuthService,
    private primengConfig: PrimeNGConfig,
    private database: AngularFireDatabase
  ) { 
    this.listRef = this.database.list('passageiros');
  }

  addUser() {
    this.listRef.push(
      { 
        nome: this.forNewNome, 
        img: 'https://cdn-icons-png.flaticon.com/512/1144/1144709.png', 
        telefone: this.forNewTelefone 
      }
    );

    this.forNewNome = '';
    this.forNewImg = '';
    this.forNewTelefone = '';
  }


  deleteUser(id: string) {
    this.listRef.remove(id);
  }



  teste() {
    console.log(
      { 
        nome: this.forNewNome, 
        img: 'https://cdn-icons-png.flaticon.com/512/1144/1144709.png', 
        telefone: this.forNewTelefone 
      }
    );
  }


}
