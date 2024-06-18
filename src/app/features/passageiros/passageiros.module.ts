import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageirosComponent } from './passageiros.component';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';



@NgModule({
  declarations: [
    PassageirosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MyComponentsModule
  ],
  exports: [
    PassageirosComponent
  ]
})
export class PassageirosModule { }
