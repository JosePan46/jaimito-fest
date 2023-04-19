import { Component } from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'app-bebida-comida',
  templateUrl: './bebida-comida.component.html',
  styleUrls: ['./bebida-comida.component.scss']
})
export class BebidaComidaComponent {
  title = 'Bebida-Comida';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Bebida'], [ 'Comida']];
  public pieChartDatasets = [ {
    data: [ 4142, 2538 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
