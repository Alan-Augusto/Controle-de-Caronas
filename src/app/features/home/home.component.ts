import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    public authService: AuthService,
    private database: AngularFireDatabase,
  ) { 
    this.listRef = this.database.list('passageiros');
  }

  listRef: any;

  rides: any[] = [
    {
      nome: 'João',
      data: '2021-10-10',
      descricao: 'Viagem para o trabalho',
    },
    {
      nome: 'Maria',
      data: '2021-10-11',
      descricao: 'Viagem para o trabalho',
    },
    {
      nome: 'José',
      data: '2021-10-12',
      descricao: 'Viagem para o trabalho',
    },
    {
      nome: 'Pedro',
      data: '2021-10-13',
      descricao: 'Viagem para o trabalho',
    }
  ]

  dialogVisible: boolean = false;

  showDialog() {
    // this.dialogService.openDialog(RideTakenListComponent, { message: 'Hello from SomeComponent!' });
  }

  deleteUser(id: string) {
    this.listRef.remove(id);
  }
}
