import { Component, OnInit } from '@angular/core';
import {ChefRegionService} from "../service/ChefRegion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(
    private tokenAdminService: ChefRegionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

   logOut(){
    const token = localStorage.getItem('token');
    /*this.logOut(token!).subscribe();*/
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
