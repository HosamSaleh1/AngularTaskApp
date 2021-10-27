import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/interfaces/taskModel';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task:Tasks = {}

  constructor(private taskService:TaskService, private router:Router, private route:ActivatedRoute) { }

  id:string = this.route.snapshot.params.id

  getSingelTask(){
    this.taskService.getSingleTaskService(this.id).subscribe((res)=>{
      this.task = res
    })
  }
  
  editTask(task:Tasks){
    this.taskService.editTaskService(this.id,task).subscribe((res)=>{
    this.router.navigate(['/viewTasks'])
  },(err)=>{
    console.log(err)
  })
}

  ngOnInit(): void {
    this.getSingelTask()
  }

}
