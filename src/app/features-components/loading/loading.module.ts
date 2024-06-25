import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../modules/primeng.module';
import { LoadingComponent } from './loading.component';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
