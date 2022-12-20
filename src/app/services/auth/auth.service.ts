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
    if(localStorage.length == 0){
      localStorage.setItem('id_token', '')
      const storage = localStorage.getItem('id_token')
      console.log("storage = " + storage)
    }
    if(token != null){
    const options = {
      headers: new HttpHeaders({
        Authorization: token ? token : '',
      }),
    };
    console.log('token : ' + token);
    return options;
  }
  const options = {
    headers: new HttpHeaders({
      Authorization: '',
    }),
  };
  return options;

}

  login(email: string, password: string) {
    console.log(localStorage.length)
    return this.http.post<User>('api/user/login', {
      email,
      password,
    }).subscribe(user1 => {
      this.user = user1;
      this.setSession(this.user.token)
    });
  }

  logout(){
  console.log("demande de logout")
  localStorage.removeItem('id_token')
  }

  setSession( idToken: string) {
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
    const token = localStorage.getItem('id_token')
    console.log("is logged in ? ")

      return this.http.get<boolean>(
        'api/user/verify/auth',
        options
      );

  }

  isUserIsAlreadyLoggedIn() {
    this.token = localStorage.getItem('id_token')
    const options = this.SetTokenHeader();
    console.log("token du storage = " + this.token)
    if(this.token === null){
      console.log("token = null")
    }
    if(this.token != null ){
      console.log("token =! null : "  + this.token)
      if(this.user == null){
          this.http.get<User>(
        'api/user/verify/getuserconnected',
        options,
      ).subscribe(s => {
        this.user = s;
      })

    }
    }
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

  isAuthor(chateau : Chateau): boolean {
    console.log("is Author : user id = " + this.user.id + " respsonsable chateau id : " + chateau.responsable.id)
  if(this.user.id === chateau.responsable.id){
    return true;
  }
  return false;
  }

  isAuthorGuard(chateau_id : number): Observable<boolean> {
    const options = this.SetTokenHeader();
    if(options){
      console.log("check si envoi vers api " + chateau_id  )
     return this.http.get<boolean>('api/user/verify/author/'+chateau_id,
 options)
    }
    console.log("retour guard = false ")
    return of (false)
  }

  isUserHaveAlreadyAComment(chateau : Chateau){

  }
}
