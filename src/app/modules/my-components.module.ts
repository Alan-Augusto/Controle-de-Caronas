import { NgModule } from '@angular/core';
import { MyButtonModule } from '../features-components/my-button/my-button.module';
import { LoadingModule } from '../features-components/loading/loading.module';
import { MyTableModule } from '../features-components/my-table/my-table.module';


@NgModule({
  imports: [
    MyButtonModule,
    LoadingModule,
    MyTableModule,
  ],
  exports: [
    MyButtonModule,
    LoadingModule,
    MyTableModule,
  ]
})
export class MyComponentsModule { }
