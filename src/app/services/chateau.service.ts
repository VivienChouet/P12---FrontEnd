import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Chateau} from "src/app/DTO/Chateau";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChateauService {

  constructor(private http: HttpClient) { }

  SetTokenHeader() {
    const token = localStorage.getItem('id_token');
    const options = {
      headers: new HttpHeaders({
        Authorization: token ? token : '',
      }),
    };
    console.log('token : ' + token);
    return options;
  }


  addChateau(chateau : Chateau , name : string, description : string){
    console.log("chateau test : " + chateau.lat + chateau.lng)
    return this.http.post(
      'api/chateau/',
      {
        "name" : name,
        "description" : description,
        "numeroAdresse" : chateau.numero_adresse,
        "codePostal" : chateau.code_postal,
        "adresse" : chateau.rue ,
        "ville" : chateau.ville,
        "lat" : chateau.lat,
        "lng" : chateau.lng
      },this.SetTokenHeader())
  }

  upDateChateau(chateau_id : number, chateau : Chateau , name : string, description : string){
    console.log("chateau test : " + chateau)
    return this.http.post(
      'api/chateau/update/' + chateau_id,
      {
        "id" : chateau_id,
        "name" : name,
        "description" : description,
        "numero_adresse" : chateau.numero_adresse,
        "code_postal" : chateau.code_postal,
        "rue" : chateau.rue ,
        "ville" : chateau.ville,
        "lat" : chateau.lat,
        "lng" : chateau.lng
      },this.SetTokenHeader())
  }

  listChateau() : Observable<Chateau[]>{
    return this.http.get<Chateau[]>('api/chateau/')
  }

  getChateauId(chateau_id : number) : Observable<Chateau>{
    return this.http.get<Chateau>('api/chateau/' + chateau_id)
  }

  getListNameChateaux() : Observable<string[]> {
   return this.http.get<string[]>('api/chateau/list/name')
  }

  listMyChateau(): Observable<Chateau[]>{
    return this.http.get<Chateau[]>('api/chateau/mychateau',this.SetTokenHeader())
  }

}
