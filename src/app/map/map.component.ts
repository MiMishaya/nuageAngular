import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit,OnInit {
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
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
  }
}
