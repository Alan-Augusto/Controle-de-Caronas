import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importações dos módulos PrimeNG
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChipModule } from 'primeng/chip';
import { FloatLabelModule } from 'primeng/floatlabel';
//tabview
import { TabViewModule } from 'primeng/tabview';
// Adicione outros módulos PrimeNG que você deseja usar

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    TabViewModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    ChipModule,
    FloatLabelModule,
    
  ],
  exports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    TabViewModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    ChipModule,
    FloatLabelModule,
    
  ]
})
export class PrimeNgModule { }
