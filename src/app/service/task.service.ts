import { Injectable } from '@angular/core';
import { Tasks } from 'src/interfaces/taskModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  // getTaskService(){
  //   return this.http.get<Tasks[]>(this.url + 'allTasks')
  // }

  getSingleTaskService(id:any){
    return this.http.get<Tasks>(this.url + 'allTasks/' + id)
  }

  addTaskService(task:Tasks){
    return this.http.post(this.url + 'addTask',task)
  }

  showTaskService(){
    return this.http.get<Tasks[]>(this.url + 'allTasks')
  }

  editTaskService(id:any,task:Tasks){
    return this.http.patch(this.url + 'updateTask/' + id,task)
  }

  deleteTaskService(id:any){
    return this.http.delete(this.url + 'deleteTask/' + id)
  }

}
