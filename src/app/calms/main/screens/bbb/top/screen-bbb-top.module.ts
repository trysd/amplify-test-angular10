import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenBbbTopRoutingModule } from './screen-bbb-top-routing.module';
import { ScreenBbbTopComponent } from './screen-bbb-top.component';


@NgModule({
  declarations: [ScreenBbbTopComponent],
  imports: [
    CommonModule,
    ScreenBbbTopRoutingModule
  ]
})
export class ScreenBbbTopModule { }
