import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EjecutivoComponent} from "./ejecutivo/ejecutivo.component";
import {MatGridListModule} from "@angular/material/grid-list";
import { VentasChartComponent } from './ejecutivo/ventas-chart/ventas-chart.component';
import {NgChartsModule} from "ng2-charts";
import { ClientesChartComponent } from './ejecutivo/clientes-chart/clientes-chart.component';
import { TicketChartComponent } from './ejecutivo/ticket-chart/ticket-chart.component';



@NgModule({
  declarations: [
    EjecutivoComponent,
    VentasChartComponent,
    ClientesChartComponent,
    TicketChartComponent
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
