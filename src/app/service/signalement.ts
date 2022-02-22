import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalementService{

  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  /*listeSig(token: string) : observable<any> {
    const url = 'http://localhost:2222/api/ChefRegions/signalements';
    console.log("token : "+"Bearer ".concat(token));
    let headers2 : HttpHeaders = new HttpHeaders().set("Authorization", "Bearer ".concat(token));
    return this.http.get(url,{headers : headers2}
    );
  }*/


}
