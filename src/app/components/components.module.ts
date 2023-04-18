import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EjecutivoComponent} from "./ejecutivo/ejecutivo.component";
import {MatGridListModule} from "@angular/material/grid-list";
import { VentasChartComponent } from './ejecutivo/ventas-chart/ventas-chart.component';
import {NgChartsModule} from "ng2-charts";



@NgModule({
  declarations: [
    EjecutivoComponent,
    VentasChartComponent
  ],
  exports: [
    EjecutivoComponent
  ],

  imports: [
    CommonModule,
    MatGridListModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
