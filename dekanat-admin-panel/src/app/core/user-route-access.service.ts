import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Lavozim } from '../model/lavozim';
import { Oqituvchi } from '../model/oqituvchi';
import { AuthService } from './auth.service';
import { JwtUtil } from './jwt.util';

@Injectable({
  providedIn: 'root'
})
export class UserRouteAccessService implements CanActivate {
  oqituvchi: Oqituvchi | null = null;
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private jwtUtil: JwtUtil) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (!this.authService.getCurrentUser() || !this.authService.getCurrentUser().lavozim) {
    //   this._snackBar.open("Sizga bu bo'limda ishlashga huquq berilmagan!", 'X ', {
    //     duration: 4000,
    //     horizontalPosition: 'center',
    //     verticalPosition:'top'
    //   });
    //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    //   return false;
    // }
    const authorities = route.data['authorities'];
    
    if (!authorities || authorities.length === 0 || this.authService.hasAnyAuthority(authorities)) {
      return true;
    }
    else {
      this._snackBar.open("Ushbu bo'limda ishlash huquqi faqat dekanda mavjud!", 'X', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
