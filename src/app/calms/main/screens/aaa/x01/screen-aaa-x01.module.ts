import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenAaaX01RoutingModule } from './screen-aaa-x01-routing.module';
import { ScreenAaaX01Component } from './screen-aaa-x01.component';


@NgModule({
  declarations: [ScreenAaaX01Component],
  imports: [
    CommonModule,
    ScreenAaaX01RoutingModule
  ]
})
export class ScreenAaaX01Module { }
