import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YieldAaaComponent } from './yield-aaa.component';

const routes: Routes = [
  {
    path: '', component: YieldAaaComponent, // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      { path: 'top', loadChildren: () => import('src/app/calms/main/screens/aaa/top/screen-aaa-top.module').then(m => m.ScreenAaaTopModule) },
      { path: 'x01', loadChildren: () => import('src/app/calms/main/screens/aaa/x01/screen-aaa-x01.module').then(m => m.ScreenAaaX01Module) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YieldAaaRoutingModule { }
