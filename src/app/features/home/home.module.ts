import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../modules/primeng.module';
import { MyComponentsModule } from '../../modules/my-components.module';
import { CaronasModule } from '../caronas/caronas.module';
import { PassageirosModule } from '../passageiros/passageiros.module';
import { LocaisModule } from '../locais/locais.module';
import { ResultadosModule } from '../resultados/resultados.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    MyComponentsModule,
    CaronasModule,
    PassageirosModule,
    LocaisModule,
    ResultadosModule,
],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
