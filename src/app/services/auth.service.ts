import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; // Import firebase correctly
import { from, Observable, take, tap } from 'rxjs';
import { withLoading } from '../features-components/operators/with-loading.operator';
import { LoadingService } from './loading.service';

/**
 * Serviço responsável pela autenticação do usuário.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  error: any;

  constructor(
    public auth: AngularFireAuth,
    public loadingService: LoadingService
  ) { }

  verifyAuth() {
    // verifica se existe usuário autenticado no localStorage e coloca em user
    this.auth.onAuthStateChanged(user => {
      this.user = user;
    });
  }

  /**
   * Realiza o cadastro do usuário utilizando o email e senha fornecidos.
   * @param email O email do usuário.
   * @param password A senha do usuário.
   */
    emailSignup(email: string, password: string): Observable<any> {
      return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
        withLoading(this.loadingService),
        take(1),
        tap(credential => {
          this.setUser(credential.user);
        })
      );
    }

  /**
   * Realiza o login do usuário utilizando o email e senha fornecidos.
   * @param email O email do usuário.
   * @param password A senha do usuário.
   */
  emailSignin(email: string, password: string): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      withLoading(this.loadingService),
      take(1),
      tap(credential => {
        this.setUser(credential.user);
      })
    );
  }

  /**
   * Realiza o login do usuário utilizando a autenticação do Google.
   */
  googleSignin(): Observable<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return from(this.auth.signInWithPopup(provider)).pipe(
      withLoading(this.loadingService),
      take(1),
      tap(credential => {
        this.setUser(credential.user);
      })
    );
  }

  /**
   * Realiza o logout do usuário.
   */
  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  setUser(user: any) {
    this.user = user;
  }
}
