import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenCccX01RoutingModule } from './screen-ccc-x01-routing.module';
import { ScreenCccX01Component } from './screen-ccc-x01.component';


@NgModule({
  declarations: [ScreenCccX01Component],
  imports: [
    CommonModule,
    ScreenCccX01RoutingModule
  ]
})
export class ScreenCccX01Module { }
