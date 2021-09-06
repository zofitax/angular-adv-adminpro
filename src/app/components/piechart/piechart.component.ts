import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styles: [
  ]
})
export class PiechartComponent  {

  @Input() titulo: string = ''; 

  public title = 'pie';
  public type = ChartType.PieChart;
  @Input('data') myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000]
  ];
  @Input('labels') chartColumns = ['City', 'Inhabitants'];
  public myOptions = {
    colors: ['#4466f2', '#1ea6ec', '#ff5370', '#22af47', '#007bff'],
    is3D: true
  };
  public myHeight = 400;

}
