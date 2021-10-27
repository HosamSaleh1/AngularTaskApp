import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Tasks } from 'src/interfaces/taskModel';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks:Tasks [] = []

  constructor(private taskService:TaskService, private router:Router, private route:ActivatedRoute) { }

  showTask(){
    this.taskService.showTaskService().subscribe((res)=>{
      this.tasks = res
    })
  }

  deleteTask(task:Tasks){
    this.taskService.deleteTaskService(task._id).subscribe(()=>{
      let index = this.tasks.indexOf(task)
      this.tasks.splice(index,1)
    })
  }

  ngOnInit(): void {
    this.showTask()
  }
}
