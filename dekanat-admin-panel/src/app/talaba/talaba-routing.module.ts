import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TalabaComponent } from './talaba.component';
import { MurojaatComponent } from './murojaat/murojaat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TalabaComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'murojaat',
        component: MurojaatComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalabaRoutingModule { }
