import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { ViewTaskComponent } from './views/view-task/view-task.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'singup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'addTask',component:AddTaskComponent,canActivate:[AuthGuardService]},
  {path:'editTask/:id',component:EditTaskComponent,canActivate:[AuthGuardService]},
  {path:'viewTasks',component:ViewTaskComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
