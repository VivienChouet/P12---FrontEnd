import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { UploadService} from "../../services/upload.service";
import {Slide} from "../../DTO/Slide";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() chateau! : number;
  slide! : Slide;
  slidestores! : Slide[] ;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  pauseOnFocus = true;


  currentSlide = 0;

  constructor(private uploadService : UploadService) { }

  ngOnInit(): void {
    this.getListFiles()
  }

  getListFiles(){
    this.uploadService.getFilesByChateauId(this.chateau).subscribe(slidestores => {
      this.slidestores = slidestores,
        console.log('slideStores : ',slidestores);
    })
  }

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  togglePaused() {
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }



}


