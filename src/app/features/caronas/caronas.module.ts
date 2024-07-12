import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaronasComponent } from './caronas.component';
import { PrimeNgModule } from '../../modules/primeng.module';
import { MyComponentsModule } from '../../modules/my-components.module';
import { FormsModule } from '@angular/forms';
import { ResumoCaronaModule } from '../resumo-carona/resumo-carona.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    CaronasComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MyComponentsModule,
    FormsModule,
    ResumoCaronaModule,
    DynamicDialogModule
  ],
  exports: [
    CaronasComponent
  ],
  providers: [
    DialogService,
    MessageService
  ]
})
export class CaronasModule { }
