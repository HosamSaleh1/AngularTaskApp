import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  getProfileService(){
    return this.http.get<Users>(this.url+'profile')
  }

}
