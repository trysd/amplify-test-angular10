import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YOrganismComponent } from './y-organism.component';
import { XMoleculeComponent } from '../../molecules/x-molecule/x-molecule.component';
import { YMoleculeComponent } from '../../molecules/y-molecule/y-molecule.component';
import { XAtomComponent } from '../../atoms/x-atom/x-atom.component';
import { YAtomComponent } from '../../atoms/y-atom/y-atom.component';


@NgModule({
  declarations: [
    YOrganismComponent,

    XMoleculeComponent,
    YMoleculeComponent,

    XAtomComponent,
    YAtomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YOrganismComponent
  ]
})
export class YOrganismModule { }
