import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any
  token:any
invalidLogin:boolean=false
  constructor(private authService:AuthService, private router:Router) { }

  login(credentials:any){
    this.authService.loginService(credentials).subscribe((res)=>{
      this.user = res
      this.token = this.user.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
      console.log(res)
      console.log('success')
    },(err)=>{
      console.log('error')
      console.log(err)
      if(err){
this.invalidLogin=true
      }
    })
  }

  ngOnInit(): void {
  }

}
