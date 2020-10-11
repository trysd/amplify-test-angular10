import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YieldCccComponent } from './yield-ccc.component';

const routes: Routes = [
  {
    path: '', component: YieldCccComponent, // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      { path: 'top', loadChildren: () => import('src/app/calms/main/screens/ccc/top/screen-ccc-top.module').then(m => m.ScreenCccTopModule) },
      { path: 'x01', loadChildren: () => import('src/app/calms/main/screens/ccc/x01/screen-ccc-x01.module').then(m => m.ScreenCccX01Module) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YieldCccRoutingModule { }
