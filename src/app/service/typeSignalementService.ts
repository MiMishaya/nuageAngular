import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TypeSignalementService{

  url = 'http://localhost:2222/api/TypeSignalements';

  constructor(private http: HttpClient) {

  }

  // @ts-ignore
  listeSig(token: string) : observable<any> {
    console.log("token : "+"Bearer ".concat(token));
    let headers2 : HttpHeaders = new HttpHeaders().set("Authorization", "Bearer ".concat(token));
    return this.http.get(
      this.url,
      {
        headers : headers2
      }
    );
  }
}
