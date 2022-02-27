import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import {environment} from "../../environments/environment";
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'cart-root',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

/*export class CartComponent implements AfterViewInit,OnInit {
  map !: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createMap();
  }

  createMap() {
    const parcThabor = {
      lat: -18.879190,
      lng:  47.507905,
    };
    const zoomlevel = 6;
    this.map = L.map('map',
      {
        center: [parcThabor.lat, parcThabor.lng],
        zoom: zoomlevel
      });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 17,
      zoomOffset: -1,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
  }
}*/
export class CartComponent implements AfterViewInit {
  map: any;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([-18.879190, 47.507905], 5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);

    this.getCurrentPosition()
    .subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);

      const icon = L.icon({
        iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
        shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
      marker.addTo(this.map);
    });
  }
}


