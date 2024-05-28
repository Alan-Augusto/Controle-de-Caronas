import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RideTakenListComponent } from './ride-taken-list.component';



@NgModule({
  declarations: [
    RideTakenListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RideTakenListComponent
  ]
})
export class RideTakenListModule { }
