import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaronasComponent } from './caronas.component';
import { PrimeNgModule } from '../../modules/primeng.module';
import { MyComponentsModule } from '../../modules/my-components.module';



@NgModule({
  declarations: [
    CaronasComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MyComponentsModule
  ],
  exports: [
    CaronasComponent
  ]
})
export class CaronasModule { }
