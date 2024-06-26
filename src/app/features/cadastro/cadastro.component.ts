import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { withLoading } from '../../features-components/operators/with-loading.operator';
import { LoadingService } from '../../services/loading.service';
import { take } from 'rxjs';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  
  email: string = '';
  senha1: string = '';
  senha2: string = '';

  senhaValida: boolean = true;
  

  constructor(
    public authService: AuthService,
    private loadingService: LoadingService
  ) { }

  validatePassword() {
    this.senhaValida = this.senha1 === this.senha2;
  }
  
  cadastrar() {
    if(this.senhaValida) {
      this.authService.emailSignup(this.email, this.senha1).pipe(
        withLoading(this.loadingService),
        take(1) // Finaliza a subscrição após receber o primeiro valor
      ).subscribe({
        next: (credentials) => {
          console.log('Cadastro realizado com sucesso', credentials);
        },
        error: (error) => {
          console.error('Erro no cadastro', error);
        },
        complete: () => {
          console.log('Processo de cadastro completo');
        }
      });
    }
  }

}
