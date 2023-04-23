import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Talaba } from '../model/talaba';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class TalabaService extends CrudBaseService<Talaba>{

  constructor(public override http: HttpClient) {
    super();
    this.http = http;
    this.url = environment.baseUrl + "talaba";
   }
  
  // url =environment.baseUrl+"talaba";
  // constructor(private http: HttpClient) { }

  // getAll(): Observable<Talaba>{
  //   return this.http.get<Talaba>(this.url);
  // }

  // create(t: Talaba): Observable<Talaba>{
  //   return this.http.post<Talaba>(this.url,t);
  // }



}
