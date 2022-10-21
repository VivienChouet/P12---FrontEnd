import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LatLng } from 'ngx-google-places-autocomplete/objects/latLng';
import { Chateau } from 'src/app/DTO/Chateau';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {

@Input() chateau! : Chateau ;


  constructor() { }

  lat : number = 44.837789;
  lng : number = -0.57918;
  zoom : number = 8;

  ngOnChanges(): void {
    this.newLocation(this.chateau);
  }

  public newLocation(chateau : Chateau){
    if(chateau){
    this.lat = chateau.localisation.lat();
    this.lng = chateau.localisation.lng();
    this.zoom = 12;
    }
    this.getMap();
  }


    public getMap(): void {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: {lat: this.lat, lng: this.lng},
          zoom: this.zoom,
          mapTypeControl: false,
        }
      );
      const marker = new google.maps.Marker({
        map,
      });
      marker.setPosition(this.chateau.localisation)
  }


}
