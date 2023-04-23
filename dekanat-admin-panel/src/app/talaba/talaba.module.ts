import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/materialModule';
import { TalabaRoutingModule } from './talaba-routing.module';
import { TalabaComponent } from './talaba.component';
import { MurojaatComponent } from './murojaat/murojaat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TalabaComponent,
    MurojaatComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TalabaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TalabaModule { }
