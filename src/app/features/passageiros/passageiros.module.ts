import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageirosComponent } from './passageiros.component';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PassageirosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MyComponentsModule,
    FormsModule
  ],
  exports: [
    PassageirosComponent
  ]
})
export class PassageirosModule { }
