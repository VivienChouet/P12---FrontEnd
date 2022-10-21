import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chateau } from 'src/app/DTO/Chateau';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

@Input () chateau! : Chateau;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  goToChateau(){
    console.log("click event = " + this.chateau.id)
    this.router.navigate(['chateaux/detail/',this.chateau.id])
  }

}
