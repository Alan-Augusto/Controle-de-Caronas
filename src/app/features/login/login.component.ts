import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { withLoading } from '../../features-components/operators/with-loading.operator';
import { LoadingService } from '../../services/loading.service';
import { take } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() goCadastro: EventEmitter<any> = new EventEmitter();
  email: string = '';
  senha: string = '';

  constructor(
    public auth: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) { }
  
  onLogin(){
    this.auth.emailSignin(this.email, this.senha).pipe(
      withLoading(this.loadingService),
      take(1) // Finaliza a subscrição após receber o primeiro valor
    ).subscribe({
      next: (user) => {
        console.log('Usuário logado com sucesso!', user);
      },
      error: (error) => {
        console.error('Erro ao logar usuário!', error);
      }
    });
  }

  onLoginGoogle(){
    this.auth.googleSignin();
  }

  onRegister(){
    this.goCadastro.emit();
  }

}
