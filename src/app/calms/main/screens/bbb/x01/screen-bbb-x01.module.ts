import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenBbbX01RoutingModule } from './screen-bbb-x01-routing.module';
import { ScreenBbbX01Component } from './screen-bbb-x01.component';


@NgModule({
  declarations: [ScreenBbbX01Component],
  imports: [
    CommonModule,
    ScreenBbbX01RoutingModule
  ]
})
export class ScreenBbbX01Module { }
