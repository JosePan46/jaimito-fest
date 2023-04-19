import { Component } from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-costes',
  templateUrl: './costes.component.html',
  styleUrls: ['./costes.component.scss']
})
export class CostesComponent {
  title = 'Costes';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Productos', 'Personal', 'Artistas', 'Producción', 'Publicidad', 'Logística', 'Otros' ],
    datasets: [
      { data: [ 65000, 59000, 80000, 81000, 56000, 55000, 40000 ], label: 'Costes (€)',
      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgb(54, 162, 235)'],
        borderWidth: 1}
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() {
  }
}
