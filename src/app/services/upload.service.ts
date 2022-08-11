import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:8080/files';

  upload(file: File, chateau_id : number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload/${chateau_id}` , formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getFilesByChateauId(chateau_id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/chateau/` + chateau_id)
  }
}
