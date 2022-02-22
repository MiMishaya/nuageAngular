import { Component } from '@angular/core';
import {ChefRegion} from "../class/ChefRegion";
import {ActivatedRoute, Router} from "@angular/router";
import {ChefRegionService} from "../service/ChefRegion.service";

@Component({
  selector: 'profile-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
   token : string | null = localStorage.getItem("token");
    chefRegion !: ChefRegion;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : ChefRegionService
  ) {   }

  ngOnInit(){
    if(this.token != null){
      this.service.aboutUser(this.token)
      .subscribe((data: any) => {
        if(data.error != null){
          console.log("error");
        }else {
          console.warn(data);
          this.chefRegion = data;
        }
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}


