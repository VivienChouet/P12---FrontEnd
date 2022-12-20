import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Commentaire } from '../../DTO/Commentaire';
import { CommentaireService } from '../../services/commentaire.service';
import { Chateau } from 'src/app/DTO/Chateau';
import { ChateauService } from 'src/app/services/chateau.service';

@Component({
  selector: 'app-chateau-detail',
  templateUrl: './chateau-detail.component.html',
  styleUrls: ['./chateau-detail.component.css'],
})
export class ChateauDetailComponent implements OnInit {
  public chateau_id = +this.route.snapshot.paramMap.get('id')!;
  unauthorized: boolean = true;
  commentaire!: Commentaire;
  commentaires: Commentaire[] = [];
  chateau!: Chateau;
  isAuthor!: boolean;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private commentaireService: CommentaireService,
    private chateauService: ChateauService
  ) {}

  ngOnInit(): void {
    this.getCommentaires();
    this.getChateau();
    console.log("chateau detail = " + this.chateau.adresse)
  }

  getCommentaires(): void {
    this.commentaireService
      .getListCommentaireByChateau_id(this.chateau_id)
      .subscribe((commentaires) => {
        console.log(
          'commentaires = ',
          commentaires.some((commentaire) => {
            return commentaire.user.id === 9;
          })
        );
        this.commentaires = commentaires;
      });
  }

  getChateau() {
    this.chateauService.getChateauId(this.chateau_id).subscribe((s) => {
      this.chateau = s;
      this.isAuthor = this.authService.isAuthor(this.chateau)

    });
  }



}
