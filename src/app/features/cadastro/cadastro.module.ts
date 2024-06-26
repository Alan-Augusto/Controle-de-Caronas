import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyComponentsModule,
    PrimeNgModule,
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
