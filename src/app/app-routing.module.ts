import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutingModule } from './auth/auth.routing';

import { NopagesComponent } from './pages/nopages/nopages.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagesComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    authRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
