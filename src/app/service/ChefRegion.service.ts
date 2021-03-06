import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {ChefRegion} from "../class/ChefRegion";

@Injectable({
  providedIn: 'root'
})
export class ChefRegionService{

  constructor(private http: HttpClient) {
  }
  // @ts-ignore
  aboutUser(token: string) : observable<any> {
    const url = 'http://localhost:2222/api/ChefRegions/details';
    console.log("token : "+"Bearer ".concat(token));
    let headers2 : HttpHeaders = new HttpHeaders().set("Authorization", "Bearer ".concat(token));
    return this.http.post(
      url,
      "",{headers : headers2}
    );
  }


}
