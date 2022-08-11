import {Component, Input, OnInit} from '@angular/core';
import { UploadService} from "../../services/upload.service";
import {Files} from "../../DTO/Files";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() chateau! : number;
  slides! : Files[]

  constructor(private uploadService: UploadService) {
  }

  ngOnInit(): void {
    this.getListImage();
  }

  getListImage(){
    this.uploadService.getFilesByChateauId(this.chateau).subscribe(slides => {
      this.slides = slides;
    })

  }

}
