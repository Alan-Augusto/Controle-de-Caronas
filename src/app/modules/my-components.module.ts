import { NgModule } from '@angular/core';
import { MyButtonModule } from '../features-components/my-button/my-button.module';


@NgModule({
  imports: [
    MyButtonModule,
  ],
  exports: [
    MyButtonModule,
  ]
})
export class MyComponentsModule { }
