import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { JwtUtil } from '../core/jwt.util';
import { Talaba } from '../model/talaba';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin : boolean | undefined;
  errorMessage: string | undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private jwtUtil: JwtUtil) { }

  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe(result => {        
        if(result.code === 200){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/talaba']);
        
        }
      },
      (error)=>{
        this.errorMessage=error.error.error;
        if(!error.error.error) this.errorMessage= 'Tizimda xatolik!';
        this.invalidLogin = true;
      });
      
  }
}
