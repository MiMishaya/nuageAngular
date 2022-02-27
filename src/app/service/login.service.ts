import { map } from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { observable } from 'rxjs';
import {ChefRegion} from "../class/ChefRegion";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  constructor(private http: HttpClient) {
    
  }

  // @ts-ignore
  authenticationService(username: string, password: string) : observable<any> {
    return this.http.post(
      "http://localhost:2222/api/ChefRegions/login",
      {username : username, password : password}
    );
  }

  // @ts-ignore
  signup(chefregion: ChefRegion) : observable<any> {

    return this.http.post(
      "http://localhost:2222/api/ChefRegions",
      chefregion
    );
  }
}
