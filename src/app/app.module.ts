import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './views/signup/signup.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './service/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { UsersService } from './service/users.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { TaskService } from './service/task.service';
import { ViewTaskComponent } from './views/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UsersService,
    TaskService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
