import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Files } from 'src/app/DTO/Files';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {


  constructor(private sanitizer: DomSanitizer ) {}

  @Input() files! : Files;
  @Input() size! : any;
  image : any;

  ngOnInit(): void {
    this.getImage();
    this.size = 200,200;
  }

  getImage(){
    console.log(this.files.data)
    const objectURL = 'data:image/jpeg;base64,' + this.files.data;
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL)
  }


}
