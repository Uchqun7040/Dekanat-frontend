import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TalabaComponent } from './talaba.component';
import { MurojaatComponent } from './murojaat/murojaat.component';

const routes: Routes = [
  {
    path: '',
    component: TalabaComponent,
    children: [
      {
        path: '',
        redirectTo: 'murojaat',
        pathMatch: 'full'
      },
      {
        path: 'murojaat',
        component: MurojaatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalabaRoutingModule { }