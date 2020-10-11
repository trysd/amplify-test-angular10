import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenCccTopRoutingModule } from './screen-ccc-top-routing.module';
import { ScreenCccTopComponent } from './screen-ccc-top.component';


@NgModule({
  declarations: [ScreenCccTopComponent],
  imports: [
    CommonModule,
    ScreenCccTopRoutingModule
  ]
})
export class ScreenCccTopModule { }
