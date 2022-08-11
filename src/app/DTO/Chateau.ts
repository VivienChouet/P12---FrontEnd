import { User } from "./User";

export interface Chateau {

  id : number;
  name : String;
  numero_adresse : Number;
  adresse : String;
  code_postal : Number;
  description : String;
  responsable : User;
}
