import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  logout(){
    this.authService.logoutService().subscribe(()=>{})
    localStorage.removeItem('token')
  }

 get isLoggedIn(){
   let token = this.authService.getTokenService()
   if(token){
     return false
   }
   return true
 }

  ngOnInit(): void {
  }

}
