import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Grafica1Component
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
