import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  invalidEmail:boolean = false
  invalidAge:boolean = false
  users:any
  token:any

  constructor(private authService:AuthService, private router:Router) { }

  singUp(credentials:any){
    this.authService.singUpService(credentials).subscribe((res)=>{
      this.users = res
      this.token = this.users.token
      console.log(this.token)
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
      console.log(res)
      console.log('success')
    },(httpError)=>{
      console.log('error')
      console.log(httpError)
      console.log(httpError.error.code)
      if(httpError.error.code === 11000){
        this.invalidEmail = true
      }
      if(httpError.error.errors.age.name === 'validatorError'){
        this.invalidAge = true
      }
    })
  }

  ngOnInit(): void {
  }

}
