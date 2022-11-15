import { LatLng } from "ngx-google-places-autocomplete/objects/latLng";
import { User } from "./User";

export interface Chateau {

  id : number;
  name : string;
  numero_adresse : number ;
  rue : string ;
  ville : string ;
  code_postal : number ;
  lat : number;
  lng : number
  localisation : string ;
  description : string;
  responsable : User;
}
