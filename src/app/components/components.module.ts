import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EjecutivoComponent} from "./ejecutivo/ejecutivo.component";
import {MatGridListModule} from "@angular/material/grid-list";
import { VentasChartComponent } from './ejecutivo/ventas-chart/ventas-chart.component';
import {NgChartsModule} from "ng2-charts";
import { ClientesChartComponent } from './ejecutivo/clientes-chart/clientes-chart.component';
import { TicketChartComponent } from './ejecutivo/ticket-chart/ticket-chart.component';

import { BarrasResumenComponent } from './barras-resumen/barras-resumen.component';
import { Barra1Component } from './barras-resumen/barra1/barra1.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import { Barra2Component } from './barras-resumen/barra2/barra2.component';
import { Barra3Component } from './barras-resumen/barra3/barra3.component';
import { Barra4Component } from './barras-resumen/barra4/barra4.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { ListaComponent } from './consumo/lista/lista.component';
import {MatTableModule} from "@angular/material/table";
import { BebidaComidaComponent } from './consumo/bebida-comida/bebida-comida.component';
import { TotalComponent } from './consumo/total/total.component';
import { OperativoComponent } from './operativo/operativo.component';
import { LogisticaComponent } from './operativo/logistica/logistica.component';
import {MatListModule} from "@angular/material/list";
import { AsistenciaComponent } from './operativo/asistencia/asistencia.component';
import { HorarioComponent } from './operativo/horario/horario.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CostesComponent } from './operativo/costes/costes.component';



@NgModule({
  declarations: [
    EjecutivoComponent,
    VentasChartComponent,
    ClientesChartComponent,
    TicketChartComponent,
    BarrasResumenComponent,
    Barra1Component,
    Barra2Component,
    Barra3Component,
    Barra4Component,
    ConsumoComponent,
    ListaComponent,
    BebidaComidaComponent,
    TotalComponent,
    OperativoComponent,
    LogisticaComponent,
    AsistenciaComponent,
    HorarioComponent,
    CostesComponent
  ],
  exports: [
    EjecutivoComponent,
    BarrasResumenComponent,
    ConsumoComponent,
    OperativoComponent
  ],

  imports: [
    CommonModule,
    MatGridListModule,
    NgChartsModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatProgressBarModule
  ]
})
export class ComponentsModule { }
