import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtUtil } from './jwt.util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private jwtUtil :JwtUtil, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.jwtUtil.isLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['/login'],{ queryParams:{ returnUrl: state.url}});
      return false;
    }
  }
 
}
