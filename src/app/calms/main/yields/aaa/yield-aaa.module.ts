import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YieldAaaRoutingModule } from './yield-aaa-routing.module';
import { YieldAaaComponent } from './yield-aaa.component';


@NgModule({
  declarations: [YieldAaaComponent],
  imports: [
    CommonModule,
    YieldAaaRoutingModule
  ]
})
export class YieldAaaModule { }
