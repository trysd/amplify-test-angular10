import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenCccTopComponent } from './screen-ccc-top.component';

const routes: Routes = [
  { path: '', component: ScreenCccTopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenCccTopRoutingModule { }
