import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {ChefRegion} from "../class/ChefRegion";
import {ChefRegionService} from "../service/ChefRegion.service";

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = "email6@gmail.com";
  password : string = "12345678";
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  token !: string ;

   chefRegion !: ChefRegion;


  ngOnInit() {
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {   }

  handleLogin() {
    this.loginService.authenticationService(this.username, this.password)
      .subscribe((data: any) => {
        if(data.token == "" || data.token == null){
          this.invalidLogin = true;
        }else {
          this.token = data.token;
          console.warn(data);
          localStorage.setItem("token", this.token);
          this.router.navigate(['customer']);
        }
      });
  }
}


