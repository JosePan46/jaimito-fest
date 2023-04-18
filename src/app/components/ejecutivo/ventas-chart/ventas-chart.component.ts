import { Component } from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-ventas-chart',
  templateUrl: './ventas-chart.component.html',
  styleUrls: ['./ventas-chart.component.scss']
})
export class VentasChartComponent {
  title = 'Ventas totales';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7' ],
    datasets: [
      { data: [ 60000, 40000, 80000, 81000, 56000, 55000, 30000 ], label: 'Ventas totales (€)' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

}
