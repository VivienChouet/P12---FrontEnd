import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/DTO/Commentaire';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }

  addCommentaire(commentaire: string, id_chateau: number) {
    const token = localStorage.getItem("id_token")
    console.log("token = " + token)
    const options = {
      headers: new HttpHeaders({
        Authorization: token ? token : ""
      })
    }
    console.log("envoi du commentaire : " + commentaire + "ayant pour id chateau : " + id_chateau)
    return this.http.post(
      'api/commentaire/',
      {
        "commentaire": commentaire,
        "id_chateau": id_chateau,
      }, options
    )
  }

  getListCommentaireByChateau_id(chateau_id : number) : Observable<Commentaire[]> {
    console.log("chateau id = " + chateau_id)
    return this.http.get<Commentaire[]>(
      'api/commentaire/chateau/'+chateau_id
    )
  }

  deleteCommentaire(id: number) {
    const token = localStorage.getItem("id_token")
    console.log("token = " + token)
    const options = {
      headers: new HttpHeaders({
        Authorization: token ? token : ""
      })
    }
    return this.http.delete('api/commentaire/chateau/' + id,options)
  }
}
