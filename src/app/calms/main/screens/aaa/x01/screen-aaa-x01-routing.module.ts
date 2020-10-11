import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenAaaX01Component } from './screen-aaa-x01.component';

const routes: Routes = [
  {
    path: '', component: ScreenAaaX01Component, // outlet: 'inner-tree-aaa'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenAaaX01RoutingModule { }
