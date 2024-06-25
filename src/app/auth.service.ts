import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; // Import firebase correctly

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  error:any;

  constructor(
    public auth: AngularFireAuth
  ) { }

  async emailSignin(email:string, password:string){
    try{
      const credentials = await this.auth.signInWithEmailAndPassword(email, password);

      this.user = credentials.user;

    }catch(error){
      this.error = error;
      
    }
  }
    

  async googleSignin(){
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;

    } catch (error) {
      this.error = error;
    }
  }

  async signOut(){
    await this.auth.signOut();
    this.error = null;
  }
}
