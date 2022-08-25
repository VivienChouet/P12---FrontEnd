import { User } from "./User";

export interface Chateau {

  id : number;
  name : String;
  numero_adresse : Number;
  searchAddress : String;
  locality : string;
  code_postal : Number;
  lattitude : number;
  longitude : number;
  description : String;
  responsable : User;
}
