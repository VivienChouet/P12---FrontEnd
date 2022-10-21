import { Component, OnInit, ViewChild } from '@angular/core';
import { Chateau } from '../../DTO/Chateau';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { ChateauService } from 'src/app/services/chateau.service';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { User } from 'src/app/DTO/User';
import { LatLng } from 'ngx-google-places-autocomplete/objects/latLng';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  chateau!: Chateau;
  chateaux: Chateau[] = [];
  addressForm!: UntypedFormGroup;
  user!: User;

  options: Options = new Options({
    types: ['address'],
    componentRestrictions: { country: 'FR' },
  });

  constructor(
    private chateauService: ChateauService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      name: [null],
    });
  }

  handleAddressChange(address: Address) {
    console.log(address);
    this.saveChateau(address);
  }

  onSubmit() {
    this.chateauService
    .addChateau(this.chateau, this.addressForm.value.name)
    .subscribe((s) => console.log(s));
  }

  public saveChateau(address: Address) {

    const chateau = {} as Chateau;

    const numero_adresse = address.address_components.find((x) =>
      x.types.includes('street_number')
    )?.short_name;
    if (numero_adresse) {
      chateau.numero_adresse = +numero_adresse;
    }

    const rue = address.address_components.find((x) =>
      x.types.includes('route')
    )?.short_name;
    if (rue) {
      chateau.rue = rue;
    }

    const ville = address.address_components.find((x) =>
      x.types.includes('locality')
    )?.short_name;
    if (ville) {
      chateau.ville = ville;
    }

    const codePostal = address.address_components.find((x) =>
      x.types.includes('postal_code')
    )?.short_name;
    if (codePostal) {
      chateau.code_postal = +codePostal;
    }

    chateau.localisation = address.geometry.location;

    this.chateau = chateau;
    this.chateaux[0] = this.chateau;
    console.log(this.chateau);
    return this.chateau;
  }
}
