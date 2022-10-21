import { Component, OnInit } from '@angular/core';
import { Chateau } from 'src/app/DTO/Chateau';
import { ChateauService } from 'src/app/services/chateau.service';

@Component({
  selector: 'app-chateau-list',
  templateUrl: './chateau-list.component.html',
  styleUrls: ['./chateau-list.component.css']
})
export class ChateauListComponent implements OnInit {

  constructor(private chateauService : ChateauService) { }

  chateau! : Chateau;
  chateaux : Chateau [] = []

  ngOnInit(): void {
  this.listChateaux();
  }

  listChateaux(){
  this.chateauService.listChateau().subscribe(chateaux => {
this.chateaux = chateaux
    console.log('list chateau : ' , chateaux)
  });
  }

}
