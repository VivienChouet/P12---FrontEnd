import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Chateau } from 'src/app/DTO/Chateau';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  chateau_id!: number;

  constructor(private utilityService: UtilityService, private route : ActivatedRoute) {
    this.chateau_id = this.route.snapshot.params['id'];
    console.log(this.chateau_id)
  }

  ngOnInit() {
    this.fileInfos = this.utilityService.getFilesByChateauId(this.chateau_id);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.utilityService.upload(this.currentFile,this.chateau_id).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.utilityService.getFilesByChateauId(this.chateau_id);
            }

          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }
}
