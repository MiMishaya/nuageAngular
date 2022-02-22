import { Component } from '@angular/core';
import {ChefRegion} from "../class/ChefRegion";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'inscrire-root',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  firstName : string = "";
  lastName : string = "";
  username: string = "";
  password : string = "";
  cpassword : string = "";
  idRegion : string = "";
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  token !: string ;

  ngOnInit() {
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {   }

  handleSignUp() {
    let chef :  ChefRegion = new ChefRegion();
    chef.password = this.password;
    chef.userName = this.username;
    chef.idRegion = this.idRegion;
    chef.name = this.lastName;
    chef.firstName = this.firstName;

    this.loginService.signup(chef)
      .subscribe((data: any) => {
        if(data.token == "" || data.token == null){
          this.invalidLogin = true;
        }else {
          console.warn(data);
          this.token = data;
          localStorage.setItem("token", this.token);
          this.router.navigate(['customer']);
        }
      });
  }
}


