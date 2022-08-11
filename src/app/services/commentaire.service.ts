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
      "http://localhost:8080/commentaire/",
      {
        "commentaire": commentaire,
        "id_chateau": id_chateau,
      }, options
    )
  }

  getListCommentaireByChateau_id(chateau_id : number) : Observable<Commentaire[]> {
    console.log("chateau id = " + chateau_id)
    return this.http.get<Commentaire[]>(
      "http://localhost:8080/commentaire/chateau/"+chateau_id
    )
  }

  deleteCommentaire(id: number) {
    return this.http.delete("http://localhost:8080/commentaire/" + id)
  }
}
