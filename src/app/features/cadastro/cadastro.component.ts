import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { withLoading } from '../../features-components/operators/with-loading.operator';
import { LoadingService } from '../../services/loading.service';
import { take } from 'rxjs';
import { MessageService } from 'primeng/api';

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
    private loadingService: LoadingService,
    private messageService: MessageService,
  ) { }

  validatePassword() {
    this.senhaValida = this.senha1 === this.senha2;

  }

  formIsValid(){
    return (
      (this.senha1 === this.senha2) &&
      (this.senha1.length >= 6) &&
      (this.email.includes('@')) &&
      (this.email.includes('.'))
    )
  }

  retornarErroFormulario(){
    if(this.senha1!=this.senha2){
      this.messageService.add({ severity: 'error', summary: 'Atençaõ', detail: 'Senhas não são iguais.' });
    }
    else if(this.senha1.length < 6){
      this.messageService.add({ severity: 'error', summary: 'Atençaõ', detail: 'Senha deve ter mais de 6 caracteres.' });
    }
    else if(!(this.email.includes('@') && this.email.includes('.'))){
      this.messageService.add({ severity: 'error', summary: 'Atençaõ', detail: 'Email Inválido.' });
    }
    
  }
  
  cadastrar() {
    if(this.formIsValid()){
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
          this.messageService.add({ severity: 'success', summary: 'Parabéns', detail: 'Cadastro realizado!' });
        }
      });
    }
    else{
      this.retornarErroFormulario();
    }
  }

}
