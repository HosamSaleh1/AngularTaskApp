import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Tasks } from 'src/interfaces/taskModel';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task:Tasks = {}
  
  constructor(private taskService:TaskService, private router:Router) { }


  addTask(task:Tasks){
    this.taskService.addTaskService(task).subscribe((res)=>{
      console.log
      this.task = res
      this.router.navigate(['/viewTask'])
    })
  }

  viewTasks(){
    this.router.navigate(['/viewTasks'])
  }

  ngOnInit(): void {
  }

}
