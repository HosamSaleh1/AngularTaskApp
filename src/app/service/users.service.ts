import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'https://task-manger-api-app.herokuapp.com/'

  constructor(private http:HttpClient) { }

  getProfileService(){
    return this.http.get<Users>(this.url+'profile')
  }
  
  addImageService(image:any){
  return this.http.post(this.url + 'profile/avatar', image)
  }

}
