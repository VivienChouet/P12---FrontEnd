import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Chateau} from "src/app/DTO/Chateau";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChateauService {

  constructor(private http: HttpClient) { }

  addChateau(chateau : Chateau , name : string){
    console.log("état des données : " + chateau.ville)
    return this.http.post(
      'api/chateau/',
      {
        "name" : name,
        "numero_adresse" : chateau.numero_adresse,
        "code_postal" : chateau.code_postal,
        "rue" : chateau.rue ,
        "ville" : chateau.ville,
        "localisation" : chateau.localisation.toString,
      })
  }

  upDateChateau(chateau : Chateau , name : string){
    console.log("état des données : " + chateau.ville)
    console.log(" chateau id = " + chateau.id)
    return this.http.post(
      'api/chateau/update/' + chateau.id,
      {
        "name" : name,
        "numero_adresse" : chateau.numero_adresse,
        "code_postal" : chateau.code_postal,
        "rue" : chateau.rue ,
        "ville" : chateau.ville,
        "localisation" : chateau.localisation.toString,
      })
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
    const token = localStorage.getItem("id_token")
    console.log("token = " + token)
    const options = {
      headers: new HttpHeaders({
        Authorization: token ? token : ""
      })
    }
    return this.http.get<Chateau[]>('api/chateau/mychateau', options)
  }

}
