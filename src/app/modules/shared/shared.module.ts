import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSelect } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MatButtonModule,
    MatSelect,
    MatBadgeModule,
    MatSliderModule,
    RouterModule,
    FlexLayoutModule,
    A11yModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
