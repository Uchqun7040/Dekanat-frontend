import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtUtil } from './jwt.util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private jwtUtil :JwtUtil, private router: Router,private _snackBar: MatSnackBar, private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.jwtUtil.isLoggedIn() && !this.authService.hasAnyAuthority(["DEKAN","ADMIN"])){
      return true;
    }
    else {
      this._snackBar.open("Ushbu bo'limda ishlash huquqi faqat talabalarga berilgan!", 'X', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.router.navigate(['/login'],{ queryParams:{ returnUrl: state.url}});
      return false;
    }
  }
 
}
