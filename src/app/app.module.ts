import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './features/root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';
import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';



@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAWhog6QkLn2y6u_H03XCAC-2IBhn-RlME",
      authDomain: "controlecaronas-3d117.firebaseapp.com",
      databaseURL: "https://controlecaronas-3d117-default-rtdb.firebaseio.com",
      projectId: "controlecaronas-3d117",
      storageBucket: "controlecaronas-3d117.appspot.com",
      messagingSenderId: "398471173721",
      appId: "1:398471173721:web:741dd5ea148271b9fc4348",
      measurementId: "G-PT22SVKSRQ"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    LoginModule,
    HomeModule,

  ],
  bootstrap: [RootComponent],
  providers: [
    AuthService
  ]
})
export class AppModule { }
