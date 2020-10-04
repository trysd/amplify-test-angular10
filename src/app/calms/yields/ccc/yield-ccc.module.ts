import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YieldCccRoutingModule } from './yield-ccc-routing.module';
import { YieldCccComponent } from './yield-ccc.component';


@NgModule({
  declarations: [YieldCccComponent],
  imports: [
    CommonModule,
    YieldCccRoutingModule
  ]
})
export class YieldCccModule { }
