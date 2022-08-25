import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Slide } from 'src/app/DTO/Slide';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {


  constructor(private sanitizer: DomSanitizer ) {}

  @Input() slide! : Slide;
  @Input() size! : any;
  image : any;

  ngOnInit(): void {
    this.getImage();
    this.size = 200,200;
  }

  getImage(){
    const objectURL = 'data:image/jpeg;base64,' + this.slide.data;
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL)
  }


}
