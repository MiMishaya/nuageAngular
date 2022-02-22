import { NgModule} from "@angular/core";


import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./Login/login.component";
import {InscrireComponent} from "./Inscription/inscrire.component";
import {PageProfilComponent} from "./Page-profil/page-profil.component";
import {PageHomeComponent} from "./Page-home/page-home.component";
import {PageRechercheComponent} from "./Page-recherche/page-recherche.component";

export const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path: 'inscrire',component: InscrireComponent},
  {path: 'customer',
    children:[
      {path: '',component: PageProfilComponent},
      {path: 'home',component: PageHomeComponent},
      {path: 'profile',component: PageProfilComponent},
      {path: 'recherche',component: PageRechercheComponent},
      {path: 'inscrit',component: InscrireComponent},
      {path: 'sorti',component: LoginComponent}
    ]
  }
  ]
@NgModule(
  {
    imports: [RouterModule.forRoot((routes))],
    exports: [RouterModule],
    declarations: []
  }
)

export class AppRoutingModule {}
