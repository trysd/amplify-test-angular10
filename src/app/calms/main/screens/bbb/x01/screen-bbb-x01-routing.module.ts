import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenBbbX01Component } from './screen-bbb-x01.component';

const routes: Routes = [
  {
    path: '', component: ScreenBbbX01Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenBbbX01RoutingModule { }
