import {Component, Input, OnInit} from '@angular/core';
import { UploadService} from "../../services/upload.service";
import {Slide} from "../../DTO/Slide";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() chateau! : number;
  slide! : Slide;
  slidestores! : Slide[] ;

  currentSlide = 0;

  constructor(private uploadService : UploadService) { }

  ngOnInit(): void {
    this.getListFiles()
  }

  getListFiles(){
    this.uploadService.getFilesByChateauId(this.chateau).subscribe(slidestores => {
      this.slidestores = slidestores,
        console.log(slidestores);
    })
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slidestores.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slidestores.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}


