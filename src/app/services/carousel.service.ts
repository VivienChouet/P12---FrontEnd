import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Slide } from '../DTO/Slide';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private sanitizer: DomSanitizer) { }

  image : any;

  getUrlImage(slide : Slide){
    const objectURL = 'data:image/jpeg;base64,' + slide.data;
    this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL)
    console.log('image appelé : ', this.image)
    return this.image;
  }

}

