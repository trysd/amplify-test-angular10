import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenAaaTopRoutingModule } from './screen-aaa-top-routing.module';
import { ScreenAaaTopComponent } from './screen-aaa-top.component';
import { XOrganismModule } from 'src/app/calms/organisms/x-organism/x-organism.module';


@NgModule({
  declarations: [ScreenAaaTopComponent],
  imports: [
    CommonModule,
    ScreenAaaTopRoutingModule,
    XOrganismModule
  ]
})
export class ScreenAaaTopModule { }
