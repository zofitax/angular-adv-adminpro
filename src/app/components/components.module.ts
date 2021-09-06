import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart/piechart.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [PiechartComponent],
  exports: [
    PiechartComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsModule
  ]
})
export class ComponentsModule { }
