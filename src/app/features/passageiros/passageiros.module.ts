import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageirosComponent } from './passageiros.component';
import { MyComponentsModule } from '../../modules/my-components.module';
import { PrimeNgModule } from '../../modules/primeng.module';
import { FormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';



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
  ],
  providers: [
    DialogService,
    MessageService,
    ConfirmationService
  ]
})
export class PassageirosModule { }
