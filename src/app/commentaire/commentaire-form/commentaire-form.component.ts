import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../DTO/User";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {CommentaireService} from "../../services/commentaire.service";
import {AuthService} from "../../services/auth/auth.service";
import {Commentaire} from "../../DTO/Commentaire";

@Component({
  selector: 'app-commentaire-form',
  templateUrl: './commentaire-form.component.html',
  styleUrls: ['./commentaire-form.component.css']
})
export class CommentaireFormComponent implements OnInit {

  @Input() chateau_id!: any;
  commentaires : Commentaire [] = [];

  constructor(private formBuilder: UntypedFormBuilder, private commentaireService: CommentaireService, private authService : AuthService) { }

  commentaireForm!: UntypedFormGroup;
  unauthorized : boolean = true;
  user! : User;


  ngOnInit(): void {
    this.commentaireForm = this.formBuilder.group({
      commentaire: [null],
    })
   console.log("id chateau = " + this.chateau_id)
  }

  submitted = false


  onSubmit() {
    this.submitted = true;
    this.commentaireService.addCommentaire(this.commentaireForm.value.commentaire, this.chateau_id).subscribe(s => console.log(s))
  }
}
