import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent  {

  progreso: number = 40;

  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor( valor: number) {
    this.progreso = this.progreso + valor;
  }

}
