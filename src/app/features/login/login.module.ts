import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MyButtonModule } from '../../features-components/my-button/my-button.module';
import { PrimeNgModule } from '../../modules/primeng.module';
import { MyComponentsModule } from '../../modules/my-components.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    MyComponentsModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
