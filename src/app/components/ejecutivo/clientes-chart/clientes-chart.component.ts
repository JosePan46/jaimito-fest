import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-clientes-chart',
  templateUrl: './clientes-chart.component.html',
  styleUrls: ['./clientes-chart.component.scss']
})
export class ClientesChartComponent {
  title = 'ng2-charts-demo';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Día 1',
      'Día 2',
      'Día 3',
      'Día 4',
      'Día 5',
      'Día 6',
      'Día 7'
    ],
    datasets: [
      {
        data: [ 8600, 5300, 10100, 10800, 7400, 7300, 4000 ],
        label: 'Clientes atendidos',
        fill: true,
        tension: 0.1,
        borderColor: 'black',
       backgroundColor: 'rgba(0,255,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
