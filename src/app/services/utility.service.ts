import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http : HttpClient, private authservice : AuthService) { }

  private baseUrl = 'api/files';

  upload(file: File, chateau_id : number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/${chateau_id}` , formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getFilesByChateauId(chateau_id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/chateau/${chateau_id}`)
  }

  deleteFileById(file_id : number){
    const option = this.authservice.SetTokenHeader()
    if(option){
    console.log("delete file : " + this.baseUrl+file_id)
    this.http.delete(`${this.baseUrl}/${file_id}`,option).subscribe(s => console.log(s))
  }
}
}
