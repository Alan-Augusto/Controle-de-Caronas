import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';
import { ResultadosComponent } from './resultados.component';



@NgModule({
  declarations: [
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MyComponentsModule,
    FormsModule
  ],
  exports: [
    ResultadosComponent
  ]
})
export class ResultadosModule { }
