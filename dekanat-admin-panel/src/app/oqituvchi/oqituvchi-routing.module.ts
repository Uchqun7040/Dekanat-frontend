import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OqituvchiComponent } from './oqituvchi.component';
import { MurojaatComponent } from './murojaat/murojaat.component';

const routes: Routes = [
  {
    path: '',
    component: OqituvchiComponent,
    children: [
      {
        path: '',
        redirectTo: 'murojaat',
        pathMatch: 'full'
      },
      {
        path: 'murojaat',
        component: MurojaatComponent,

      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OqituvchiRoutingModule { }
