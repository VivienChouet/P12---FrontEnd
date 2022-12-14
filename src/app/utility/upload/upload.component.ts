import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Chateau } from 'src/app/DTO/Chateau';
import { MyFile } from 'src/app/DTO/MyFile';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: MyFile;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  chateau_id!: number;
  submitted = false;
  deleteForm! : FormGroup;
  file!: MyFile;


  constructor(
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
  ) {}

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      File_id : [null]
    })
    this.chateau_id = this.route.snapshot.params['id'];
    console.log(this.chateau_id);
    this.fileInfos = this.utilityService.getFilesByChateauId(this.chateau_id);
  }



  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: MyFile | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.utilityService
          .upload(this.currentFile, this.chateau_id)
          .subscribe({
            next: (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round((100 * event.loaded) / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.utilityService.getFilesByChateauId(
                  this.chateau_id
                );
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
            },
          });
      }
      this.selectedFiles = undefined;
    }
  }

  onSubmit(file_id : number) {
    this.submitted=true;
    console.log("delete form id = " + file_id)
    this.utilityService.deleteFileById(file_id)
  }

  deleteFiles(file : MyFile){
    if(file.id){
      console.log("file id to delete : " + file.id)
      this.utilityService.deleteFileById(file.id);
    }
  }
}
