import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app.routing";
import { AppComponent } from './app.component';
import {LoginComponent} from "./Login/login.component";
import {InscrireComponent} from "./Inscription/inscrire.component";
import {HeaderComponent} from "./Header/header.component";
import {FooterComponent} from "./Footer/footer.component";
import {RechercheComponent} from "./Recherche/recherche.component";
import {ProfileComponent} from "./Profile/profile.component";
import {PageProfilComponent} from "./Page-profil/page-profil.component";
import {PageHomeComponent} from "./Page-home/page-home.component";
import {PageRechercheComponent} from "./Page-recherche/page-recherche.component";
import {CartComponent} from "./Cart/cart.component";
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from "./service/login.service";
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ListSignalementComponent } from './list-signalement/list-signalement.component';
import { ListSignalementRechercheComponent } from './list-signalement-recherche/list-signalement-recherche.component';
import { ChartjsComponent } from './modules/application/chartjs/chartjs.component';
import { ChartjsModule } from './modules/application/chartjs/chartjs.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscrireComponent,
    HeaderComponent,
    FooterComponent,
    RechercheComponent,
    ProfileComponent,
    PageProfilComponent,
    PageHomeComponent,
    PageRechercheComponent,
    CartComponent,
    NavComponent,
    ListSignalementComponent,
    ListSignalementRechercheComponent,
    ChartjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartjsModule
  ],
  providers: [
    CartComponent,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
