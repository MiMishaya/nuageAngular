import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import * as L from 'leaflet';

@Component({
  selector: 'cart-root',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements AfterViewInit {
  map: any;


  //atao eto daoly ny liste an icone
  // retrieve from https://gist.github.com/ThomasG77/61fa02b35abf4b971390
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });


  constructor() {
  }

  ngOnInit(): void {
    const madaCoordPourLeZoom =
      {
        lat: -18.92496,
        lng: 46.441642,
      };
    /*6 mahia ny 22 regions*/
    const zoomLevel = 6;

    //zoom level: niveau de zoom le vo mipoitra
    //creation et affectation de la carte
    //eto amle 'map' anaranle div asiana azy, ny ambony option daoly
    this.map = L.map('map', {
      center: [madaCoordPourLeZoom.lat, madaCoordPourLeZoom.lng],
      zoom: zoomLevel
    });

    // minZoom:  ,
    //   maxZoom: , pour limiter la capacité de zoom
    //mitelecharge anle layer(tsy maintsy misy)par le lien
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


  }

  ngAfterViewInit(): void {

  }

  /* reloadData() {
     this.signalementservice(4).subscribe(data => {
       this.listeSignalParRegion = data;
       //console.log("données reçues");

       //atao eto ambany eto le fonction mila anle données no antsoina fa manjary mbola tsy azo le données
       //na mbola ao amle ngafterview init aza dia mbola tsy hitany satria le izy le mandeha assynchrone dia hafahafa
       this.createMap();

     });

   }*/


  /*createMap() {
    //config générale ilainle map irery iany fa tsy le classe na ny fonction hafa no ato
    const madaCoordPourLeZoom =
      {
        lat: -18.92496,
        lng: 46.441642,
      };
    /*6 mahia ny 22 regions*/
  //const zoomLevel = 6;
  //zoom level: niveau de zoom le vo mipoitra
  //creation et affectation de la carte
  //eto amle 'map' anaranle div asiana azy, ny ambony option daoly
  /*this.map = L.map('map', {
    center: [madaCoordPourLeZoom.lat, madaCoordPourLeZoom.lng],
    zoom: zoomLevel
  });

  // minZoom:  ,
  //   maxZoom: , pour limiter la capacité de zoom
  //mitelecharge anle layer(tsy maintsy misy)par le lien
  const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  /* const coordonnee =
   {
     // {{signalementCarteR.categorie[0].nom}}
     // {{signalementCarteR.categorie[0].nom}}
     lat: this.listeSignalParRegion[0].coordonnee.latitude,
     lng: this.listeSignalParRegion[0].coordonnee.longitude,
   };

   mainLayer.addTo(this.map);
   this.addMarker();*/
  //
  //}


  /*ajout*/
  /*addMarker()
  {
    for(let i=0; i<this.listeSignalParRegion.length; i++)
    {
      //mbola amboarina eo le valuer dynamique mbola tsy mipoitra dia mbola atao différent par etat koa ny couleur an icone
      const marker = L.marker([this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude], { icon: this.smallIcon });
      marker.addTo(this.map).bindPopup(
        "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].description+"</h5>"
      );
    }
  }*/

}



