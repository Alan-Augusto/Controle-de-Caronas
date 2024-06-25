import { NgModule } from '@angular/core';
import { MyButtonModule } from '../features-components/my-button/my-button.module';
import { LoadingModule } from '../features-components/loading/loading.module';


@NgModule({
  imports: [
    MyButtonModule,
    LoadingModule,
  ],
  exports: [
    MyButtonModule,
    LoadingModule,
  ]
})
export class MyComponentsModule { }
