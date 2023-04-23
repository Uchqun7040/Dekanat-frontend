import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environment';
import { Murojaat } from '../model/murojaat';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class MurojaatService extends CrudBaseService<Murojaat>{

  constructor(public override http: HttpClient) {
    super();
    this.http = http;
    this.url = environment.baseUrl + "murojaat";
   }

   getAllByTalabaId(id: number, force?: boolean, params?: HttpParams): Observable<Murojaat[]> {
    if(force)
    return this.http.get<Murojaat[]>(this.url+"/getByTalabaId/"+id, {
      params: params
    });
    return this.http.get<Murojaat[]>(this.url + "/getByTalabaId/"+id,
      {
        params: params
      }).pipe(
      shareReplay(1)
    );
  }
  
}
