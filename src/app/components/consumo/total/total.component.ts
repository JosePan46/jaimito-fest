import { Component } from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {
  title = 'Productos';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Coca Cola', 'Hot Dog', 'Combinados', 'Hamburguesas', 'Pizza' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [ 1120,750,730,678,650] },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() {
  }

}
