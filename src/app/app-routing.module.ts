import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'aaa', loadChildren: () => import('./calms/yields/aaa/yield-aaa.module').then(m => m.YieldAaaModule) },
  { path: 'bbb', loadChildren: () => import('./calms/yields/bbb/yield-bbb.module').then(m => m.YieldBbbModule) },
  { path: 'ccc', loadChildren: () => import('./calms/yields/ccc/yield-ccc.module').then(m => m.YieldCccModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
