import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  senha: string = '';

  constructor(
    public auth: AuthService
  ) { }
  
  onLogin(){
    console.log('Login: ', this.email);
    console.log('Senha: ', this.senha);
    this.auth.emailSignin(this.email, this.senha);
  }

  onLoginGoogle(){
    this.auth.googleSignin();
  }

}
