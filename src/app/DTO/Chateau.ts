import { LatLng } from "ngx-google-places-autocomplete/objects/latLng";
import { User } from "./User";

export interface Chateau {

  id : number;
  name : string;
  numero_adresse : number ;
  rue : string ;
  ville : string ;
  code_postal : number ;
  localisation : LatLng ;
  description : string;
  responsable : User;
}
