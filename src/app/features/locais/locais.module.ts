import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaisComponent } from './locais.component';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LocaisComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MyComponentsModule,
    FormsModule,
  ],
  exports: [
    LocaisComponent
  ]
})
export class LocaisModule { }
