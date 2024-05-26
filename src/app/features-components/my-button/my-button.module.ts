import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MyButtonComponent } from './my-button.component';



@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    MyButtonComponent
  ]
})
export class MyButtonModule { }
