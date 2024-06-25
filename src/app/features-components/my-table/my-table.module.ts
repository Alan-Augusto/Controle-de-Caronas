import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table.component';
import { PrimeNgModule } from '../../modules/primeng.module';



@NgModule({
  declarations: [
    MyTableComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MyTableComponent
  ]
})
export class MyTableModule { }
