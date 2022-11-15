import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommentaireService} from "../../services/commentaire.service";
import {AuthService} from "../../services/auth/auth.service";
import {Commentaire} from "../../DTO/Commentaire";

@Component({
  selector: 'app-commentaire-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() commentaire!: Commentaire;

  constructor(private authService : AuthService, private commentaireService : CommentaireService, private formBuilder : FormBuilder) { }

  moderate!:boolean
  submitted = false
  deleteForm!: FormGroup



  ngOnInit(): void {
    this.moderate = false;
    //this.moderateur = this.authService.isModerateur();
    this.deleteForm = this.formBuilder.group({})
    console.log("liste des commentaire = " + this.commentaire.id)
    console.log("liste des commentaire = " + this.commentaire.user.firstName)

  }

  onSubmit(){
    this.submitted=true;
    this.commentaireService.deleteCommentaire(this.commentaire.id).subscribe(s=>console.log(s))
  }


}
