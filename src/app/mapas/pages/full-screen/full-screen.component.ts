import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `#mapa{
      height: 100%;
      width: 100%;
    }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-5.678982883092341, 43.52474013220625],
      zoom: 15
    });

  }
}
