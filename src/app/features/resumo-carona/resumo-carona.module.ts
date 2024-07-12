import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumoCaronaComponent } from './resumo-carona.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';



@NgModule({
  declarations: [
    ResumoCaronaComponent,
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    PrimeNgModule,
    MyComponentsModule,
    FormsModule
  ],
  exports: [
    ResumoCaronaComponent
  ]
})
export class ResumoCaronaModule { }
