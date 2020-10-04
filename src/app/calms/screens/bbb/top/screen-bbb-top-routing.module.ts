import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenBbbTopComponent } from './screen-bbb-top.component';

const routes: Routes = [
  {
    path: '', component: ScreenBbbTopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenBbbTopRoutingModule { }
