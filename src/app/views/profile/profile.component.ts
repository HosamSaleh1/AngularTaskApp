import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UsersService, private router:Router) { }

  user:any

  getProfile(){
    this.userService.getProfileService().subscribe((res)=>{
      console.log(res)
      this.user = res
    },(err)=>{
      console.log(err)
    })
  }

  file:any
  
  handleUpload(event:any){
    this.file = event.target.files
    console.log(this.file)
  }

  uploadFile(){
    const myData = new FormData()
    for(let i = 0; i<this.file.length; i++){
      myData.append('avatar', this.file[i])
    }
    console.log(myData)
    this.userService.addImageService(myData).subscribe(()=>{})
    window.location.reload()
  }

  addTask(){
    this.router.navigate(['/addTask'])
  }

  viewTasks(){
    this.router.navigate(['/viewTasks'])
  }
  
  ngOnInit(): void {
    this.getProfile()
  }

}
