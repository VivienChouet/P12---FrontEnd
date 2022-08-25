import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getMap()
  }
    public getMap(): void {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: {lat: 44.837789, lng: -0.57918},
          zoom: 8,
          mapTypeControl: false,
        }
      );
  }

}
