import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'aaa', loadChildren: () => import('./calms/main/yields/aaa/yield-aaa.module').then(m => m.YieldAaaModule) },
  { path: 'bbb', loadChildren: () => import('./calms/main/yields/bbb/yield-bbb.module').then(m => m.YieldBbbModule) },
  { path: 'ccc', loadChildren: () => import('./calms/main/yields/ccc/yield-ccc.module').then(m => m.YieldCccModule) }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
