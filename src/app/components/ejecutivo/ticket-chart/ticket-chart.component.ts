import { Component } from '@angular/core';
import {ChartConfiguration} from "chart.js";
import _default from "chart.js/dist/plugins/plugin.tooltip";


@Component({
  selector: 'app-ticket-chart',
  templateUrl: './ticket-chart.component.html',
  styleUrls: ['./ticket-chart.component.scss']
})
export class TicketChartComponent {
  title = 'ventas / tickets_vendidos';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7' ],
    datasets: [
      { data: [ 6.9, 7.5, 7.9, 7.5, 7.5, 7.6, 7.5 ], label: 'Promedio ventas/tickets',
      backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'],
      borderColor: [ 'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'],
        borderWidth: 1
      }
      ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

}
