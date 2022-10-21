import { Component, OnInit } from '@angular/core';
import { Chateau } from 'src/app/DTO/Chateau';
import { ChateauService } from 'src/app/services/chateau.service';

@Component({
  selector: 'app-mychateau',
  templateUrl: './mychateau.component.html',
  styleUrls: ['./mychateau.component.css']
})
export class MychateauComponent implements OnInit {

  constructor(private chateauService : ChateauService) { }

  chateau! : Chateau;
  chateaux : Chateau [] = []

  ngOnInit(): void {
  this.listMyChateaux();
  }

  listMyChateaux(){
  this.chateauService.listMyChateau().subscribe(chateaux => {
this.chateaux = chateaux
    console.log('list of My chateau : ' , chateaux)
  });
  }

}
