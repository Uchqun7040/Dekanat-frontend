import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard.service';
import { UserRouteAccessService } from './core/user-route-access.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Lavozim } from './model/lavozim';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TalabaComponent } from './talaba/talaba.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'talaba',
    loadChildren: () =>
      import('./talaba/talaba.module').then((m) => m.TalabaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'oqituvchi',
    loadChildren: () =>
      import('./oqituvchi/oqituvchi.module').then((m) => m.OqituvchiModule),
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [Lavozim.DEKAN,Lavozim.ADMIN]
    }
  },

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
