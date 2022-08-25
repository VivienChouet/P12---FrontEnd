import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Chateau} from "../../DTO/Chateau";
import {ChateauService} from "../../services/chateau.service";
import {User} from "../../DTO/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})


export class AddressFormComponent implements  OnInit {

  constructor(private fb: FormBuilder, private chateauService : ChateauService) {}

  chateau! : Chateau;
  autocomplete! : any;

  addressForm = this.fb.group({
    name: null,
  })

  ngOnInit() {
  this.autocomplete = this.initAutocomplete();
  this.Map();
  }

  onSubmit(): void {
    alert('Thanks!');
    console.log("adresse envoyé au back = " + this.chateau.locality);
  }

    public initAutocomplete() {
      let address1Field = document.querySelector("#searchAddress") as HTMLInputElement;
      this.autocomplete = new google.maps.places.Autocomplete(address1Field, {
        componentRestrictions: {country: ["FR"]},
        fields: ["address_components", "geometry"],
        types: ["address"],
      });
      address1Field.focus();
        this.autocomplete.addListener("place_changed", this.fillInAddress);
        this.autocomplete.addListener("place_changed", this.Map)
    }

    public fillInAddress(autocomplete : any) {
      let address1Field = document.querySelector("#searchAddress") as HTMLInputElement;
      let address2Field = document.querySelector("#address2") as HTMLInputElement;
      let postalField = document.querySelector("#postcode") as HTMLInputElement;
      // Get the place details from the autocomplete object.
      const place = autocomplete.getPlace();
      let address1 = "";
      let postcode = "";
      // Get each component of the address from the place details,
      // and then fill-in the corresponding field on the form.
      // place.address_components are google.maps.GeocoderAddressComponent objects
      // which are documented at http://goo.gle/3l5i5Mr
      if(autocomplete !== undefined){
        console.log("autocomplete = " + autocomplete.value)
      for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
        // @ts-ignore remove once typings fixed
        const componentType = component.types[0];
        switch (componentType) {
          case "street_number": {
            address1 = `${component.long_name} ${address1}`;
            break;
          }
          case "route": {
            address1 += component.short_name;
            break;
          }
          case "postal_code": {
            postcode = `${component.long_name}${postcode}`;
            break;
          }
          case "postal_code_suffix": {
            postcode = `${postcode}-${component.long_name}`;
            break;
          }
          case "locality":
            (document.querySelector("#locality") as HTMLInputElement).value =
              component.long_name;
            break;
          case "administrative_area_level_1": {
            (document.querySelector("#state") as HTMLInputElement).value =
              component.short_name;
            break;
          }
          case "country": {
            (document.querySelector("#country") as HTMLInputElement).value =
              component.long_name;
            break;
          }
        }
        address1Field.value = address1;
        console.log("adresse = " + address1);
        postalField.value = postcode;
        this.chateau.locality = (document.querySelector("#locality") as HTMLInputElement).value
      }
        // After filling the form with address components from the Autocomplete
        // prediction, set cursor focus on the second address line to encourage
        // entry of subpremise information such as apartment, unit, or floor number.
        address2Field.focus();
      }
    }

    public Map(): void {
      const place = this.autocomplete.getPlace();
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: {lat: 44.837789, lng: -0.57918},
          zoom: 8,
          mapTypeControl: false,
        }
      );
      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
      });
      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(13);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    }
}


