import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/'
  
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
}
