import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError, timeout } from 'rxjs';
import { Chateau } from 'src/app/DTO/Chateau';
import { User } from 'src/app/DTO/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  user!: User;
  token!: any;
  error: Error | null = null;
  verify!: boolean;

  SetTokenHeader() {
    const token = localStorage.getItem('id_token');
    const options = {
      headers: new HttpHeaders({
        Authorization: token ? token : '',
      }),
    };
    console.log('token : ' + token);
    return options;
  }

  login(email: string, password: string) {
    return this.http.post<User>('api/user/login', {
      email,
      password,
    }).subscribe(user1 => {
      this.user = user1;
      this.setSession(20000,this.user.token)
    });
  }

  setSession(expiresIn: any, idToken: string) {
    console.log('setSession activated');
    localStorage.setItem('id_token', idToken);
    console.log('token save = ' + localStorage.getItem('id_token'));
  }

  addUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    return this.http.post('api/user/', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  }

  getToken() {
    this.token = localStorage.getItem('id_token');
    return this.token;
  }

  isLoggedIn(): Observable<boolean> {
    const options = this.SetTokenHeader();
    if (options) {
      return this.http.get<boolean>(
        'api/user/verify/auth',
        options
      );
    }
    return of(false);
  }

  isAdmin(): Observable<boolean> {
    const options = this.SetTokenHeader();
    if (options) {
      return this.http.get<boolean>(
        'api/user/verify/admin',
        options
      );
    }
    return of(false);
  }


  isAuthor(user : User , chateau : Chateau): boolean {
  if(user.id === chateau.responsable.id){
    return true;
  }
  return false;
  }

  isAuthorGuard(chateau : Chateau): Observable<boolean> {
    const options = this.SetTokenHeader();

    if(options){
      return this.http.post<boolean>('api/user/verify/author',
      {
        "chateau_id": chateau.id
      }
      ,options);
    }
    return of (false)
  }
}
