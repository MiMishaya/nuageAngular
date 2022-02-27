import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignalementService{

  url = 'http://localhost:2222/api/ChefRegions/signalements';

  constructor(private http: HttpClient) {

  }

  // @ts-ignore
  listeSig(token: string) : observable<any> {
    console.log("token : "+"Bearer ".concat(token));
    let headers2 : HttpHeaders = new HttpHeaders().set("Authorization", "Bearer ".concat(token));
    let params1 : HttpParams = new HttpParams().set("pageNo", 1000);
    return this.http.get(
      this.url,
      {
        params : params1,
        headers : headers2
      }
    );
  }
}
