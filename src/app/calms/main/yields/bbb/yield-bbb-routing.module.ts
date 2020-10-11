import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YieldBbbComponent } from './yield-bbb.component';

const routes: Routes = [
  {
    path: '', component: YieldBbbComponent, // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      { path: 'top', loadChildren: () => import('src/app/calms/main/screens/bbb/top/screen-bbb-top.module').then(m => m.ScreenBbbTopModule) },
      { path: 'x01', loadChildren: () => import('src/app/calms/main/screens/bbb/x01/screen-bbb-x01.module').then(m => m.ScreenBbbX01Module) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YieldBbbRoutingModule { }
