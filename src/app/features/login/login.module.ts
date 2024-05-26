import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MyButtonModule } from '../../features-components/my-button/my-button.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    MyButtonModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
