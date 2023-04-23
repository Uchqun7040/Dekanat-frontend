import { HttpClient, HttpParamsOptions,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWT_OPTIONS } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environment';
import { Talaba } from '../model/talaba';
import { TalabaService } from '../service/talaba.service';
import { JwtUtil } from './jwt.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = "https://student.qarshidu.uz/rest/v1";
  constructor(public http: HttpClient,public jwtUtil: JwtUtil, private talabaService: TalabaService) { }

  login(loginParol: any): Observable<any> {
    return this.http.post<any>(this.api+"/auth/login", loginParol)
    .pipe( map((response)=>{
        this.jwtUtil.save(response.data.token, true);
        // this.accountService.identity(true)
        return response;
      })
    );
  }

  // register(user: any): Observable<any> {
  //   return this.http.post<any>(this.api + "/register", user);
  // }

  logout(): void {
    this.jwtUtil.clear();
    // this.accountService.authenticate(null);
  }
 
  getCurrentUser(): Talaba | any{
    let token = this.jwtUtil.getToken();
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<any>(this.api+"/account/me",{headers: reqHeader})
    .pipe(map((response)=>{
      let talaba : Talaba ={
        hemisId: response.data.student_id_number,
        ism: response.data.first_name,
        familiya: response.data.second_name,
        sharif: response.data.third_name,
        yonalish: response.data.specialty.name,
        talimShakl: response.data.educationForm.name,
        talimTur: response.data.educationType.name,
        guruh: response.data.group.name,
        fakultet: response.data.faculty.name,
        bosqich: response.data.level.name,
        manzil: response.data.address,
        id: 0
      }
      this.talabaService.create(talaba).subscribe(
        res=>{
          talaba.id = res.id;
        }
      );
      return talaba;    
    }));
    
  }
  
  
}
