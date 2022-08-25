import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {Commentaire} from "../../DTO/Commentaire";
import {CommentaireService} from "../../services/commentaire.service";

@Component({
  selector: 'app-chateau-single',
  templateUrl: './chateau-single.component.html',
  styleUrls: ['./chateau-single.component.css']
})
export class ChateauSingleComponent implements OnInit {

  chateau_id! : any;
  unauthorized : boolean = true;
  commentaire! : Commentaire;
  commentaires : Commentaire[] = [];

  constructor(private route : ActivatedRoute, private authService : AuthService, private commentaireService : CommentaireService) { }

  ngOnInit(): void {
    this.getChateauId();
    this.getCommentaires()
  }

  getChateauId() : void {
    this.chateau_id = this.route.snapshot.paramMap.get('id')
  }

  getCommentaires() : void {
    this.commentaireService.getListCommentaireByChateau_id(this.chateau_id).subscribe(commentaires =>
    {
      console.log("commentaires = " , commentaires.some((commentaire)=>{
        return commentaire.user.id===9
      }))
      this.commentaires = commentaires;
    })
  }

}
