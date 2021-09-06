import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1: string[] = ['ciudad', 'Habitantes'];
  public data1 = [
    ['London', 30],
    ['New York', 20],
    ['Paris', 5],
    ['Berlin', 9],
    ['Kairo', 100]
  ];
}
