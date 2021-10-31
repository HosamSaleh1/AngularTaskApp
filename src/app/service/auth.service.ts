import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://task-manger-api-app.herokuapp.com/'
  
  constructor(private http:HttpClient) { }

  singUpService(credentials:any){
    return this.http.post(this.url+'addUser',credentials)
  }

  getTokenService(){
    return localStorage.getItem('token')
  }
  
  loginService(credentials:any){
    return this.http.post(this.url+'login',credentials)
  }

  logoutService(){
    return this.http.delete(this.url + 'logout')
  }
}
