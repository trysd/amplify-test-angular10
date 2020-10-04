import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YieldBbbRoutingModule } from './yield-bbb-routing.module';
import { YieldBbbComponent } from './yield-bbb.component';


@NgModule({
  declarations: [YieldBbbComponent],
  imports: [
    CommonModule,
    YieldBbbRoutingModule
  ]
})
export class YieldBbbModule { }
