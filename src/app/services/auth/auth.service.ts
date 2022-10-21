import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError, timeout } from 'rxjs';
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
    console.log('toke : ' + token);
    return options;
  }

  login(email: string, password: string) {
    return this.http.post<User>('http://localhost:8080/user/login', {
      email,
      password,
    });
  }

  setSession(expiresIn: any, idToken: string) {
    console.log('setSession activated');
    localStorage.setItem('id_token', idToken);
    console.log('token save = ' + localStorage.getItem('id_token'));
  }

  addUser(
    firstName: String,
    lastName: string,
    email: string,
    password: string
  ) {
    return this.http.post('http://localhost:8080/user/', {
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
        'http://localhost:8080/user/verify/auth',
        options
      );
    }
    return of(false);
  }

  isAdmin(): Observable<boolean> {
    const options = this.SetTokenHeader();
    if (options) {
      return this.http.get<boolean>(
        'http://localhost:8080/user/verify/admin',
        options
      );
    }
    return of(false);
  }
}
