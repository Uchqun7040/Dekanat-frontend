import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Oqituvchi } from '../model/oqituvchi';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class OqituvchiService extends CrudBaseService<Oqituvchi>{

  constructor(public override http: HttpClient) {
    super();
    this.http = http;
    this.url = environment.baseUrl + "oqituvchi";
   }

   getAllDekan(force?: boolean, params?: HttpParams): Observable<Oqituvchi[]> {
    if(force)
    return this.http.get<Oqituvchi[]>(this.url + "/dekans", {
      params: params
    });
    return this.http.get<Oqituvchi[]>(this.url + '/dekans',
      {
        params: params
      }).pipe(
      shareReplay(1)
    );
  }
}
