import {Component, OnInit} from '@angular/core';
import {ChefRegion} from "../class/ChefRegion";
import {ActivatedRoute, Router} from "@angular/router";
import {SignalementService} from "../service/signalement";
import {Signalement} from "../class/signalement";
import {PaginationResponse} from "../class/PaginationResponse";
import {paginationResponseService} from "../service/PaginationResponse.service";

@Component({
  selector: 'app-list-signalement',
  templateUrl: './list-signalement.component.html',
  styleUrls: ['./list-signalement.component.css']
})
export class ListSignalementComponent implements OnInit {
  token: string | null = localStorage.getItem("token");
  chefRegion !: ChefRegion;
  signalement !:Signalement;
  page !: PaginationResponse;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageR : paginationResponseService
  ) {
  }

  ngOnInit(): void {
    if (this.token != null) {
      this.pageR.listeSig(this.token)
        .subscribe((data: any) => {
          if (data.error != null) {
            console.log("error");
          } else {
            console.warn(data);
            this.page = data;
            console.warn(this.page);
          }
        });
    } else {
      this.router.navigate(['login']);
    }
  }

}
