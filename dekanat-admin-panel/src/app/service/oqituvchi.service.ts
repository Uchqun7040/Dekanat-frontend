import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
