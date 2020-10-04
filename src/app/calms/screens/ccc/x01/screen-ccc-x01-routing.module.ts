import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenCccX01Component } from './screen-ccc-x01.component';

const routes: Routes = [
  { path: '', component: ScreenCccX01Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenCccX01RoutingModule { }
