import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UsersService) { }
  user:any
  getProfile(){
    this.userService.getProfileService().subscribe((res)=>{
      console.log(res)
      this.user = res
    },(err)=>{
      console.log(err)
    })
  }
  ngOnInit(): void {
    this.getProfile()
  }

}
