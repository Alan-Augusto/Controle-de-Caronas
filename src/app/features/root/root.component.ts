import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PrimeNGConfig } from 'primeng/api';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent implements OnInit{

  cadastro:boolean = false;

  constructor(
    public authService: AuthService,
    private primengConfig: PrimeNGConfig,
  ) {}

  ngOnInit() {

    this.authService.verifyAuth();

    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }

  goCadastro(){
    this.cadastro = true;
  }

  goLogin(){
    this.cadastro = false;
  }


  get user() {
    return this.authService.user;
  }
}
