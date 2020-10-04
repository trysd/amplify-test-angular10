import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenAaaTopComponent } from './screen-aaa-top.component';

const routes: Routes = [
  {
    path: '', component: ScreenAaaTopComponent, // outlet: 'inner-tree-aaa'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenAaaTopRoutingModule { }
