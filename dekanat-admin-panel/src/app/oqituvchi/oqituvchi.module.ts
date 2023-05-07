import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OqituvchiComponent } from './oqituvchi.component';
import { OqituvchiRoutingModule } from './oqituvchi-routing.module';
import { MurojaatComponent } from './murojaat/murojaat.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { MaterialModule } from '../material/materialModule';
import { MurojaatDialogComponent } from './murojaat-dialog/murojaat-dialog.component';
import { MurojaatService } from '../service/murojaat.service';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    OqituvchiComponent,
    MurojaatComponent,
    TopNavComponent,
    MurojaatDialogComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OqituvchiRoutingModule,
    MaterialModule,
    FormsModule
    
  ]
})
export class OqituvchiModule { }
