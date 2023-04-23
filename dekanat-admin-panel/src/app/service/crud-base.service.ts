import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Page } from '../model/page';

export class CrudBaseService<Type> {
  public url: any;
  public http!: HttpClient

  getAll(force?: boolean, params?: HttpParams): Observable<Page<Type>> {
    if(force)
    return this.http.get<Page<Type>>(this.url, {
      params: params
    });
    return this.http.get<Page<Type>>(this.url,
      {
        params: params
      }).pipe(
      shareReplay(1)
    );
  }
  getAllList(force?: boolean, params?: HttpParams): Observable<Type[]> {
    if(force)
    return this.http.get<Type[]>(this.url + "/full", {
      params: params
    });
    return this.http.get<Type[]>(this.url + '/full',
      {
        params: params
      }).pipe(
      shareReplay(1)
    );
  }
  getById(id: number, force?: boolean, params?: HttpParams): Observable<Type> {
    if(force)
    return this.http.get<Type>(this.url+"/"+id, {
      params: params
    });
    return this.http.get<Type>(this.url + "/"+id,
      {
        params: params
      }).pipe(
      shareReplay(1)
    );
  }
  statusChange(id: number, params?: HttpParams): Observable<Type> {

    return this.http.get<Type>(this.url+"/status/"+id, {
      params: params
    });
  }
  create(model: Type, params?: HttpParams): Observable<Type>{
    return this.http.post<Type>(this.url, model, {
      params: params
    });
  }
  update(model: Type, params?: HttpParams): Observable<Type>{
    return this.http.put<Type>(this.url, model, {
      params: params
    });
  }
  delete(id: number, params?: HttpParams): Observable<any>{
    return this.http.delete(this.url + "/" + id, {
      params: params
    });
  }




}
