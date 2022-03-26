import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import {AdminStudentComponent } from './admin-student/admin-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthGuard } from './auth.guard';

import { AddAcademyComponent } from './add-academy/add-academy.component';
import { EditAcademyComponent } from './edit-academy/edit-academy.component';
import { AcademyDetailsComponent } from './academy-details/academy-details.component';
import { AcademyListComponent } from './academy-list/academy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AdminDashbordComponent,
    UserDashbordComponent,
    AdminStudentComponent,
    EditStudentComponent,
    AddStudentComponent,
    AddAcademyComponent,
    EditAcademyComponent,
    AcademyDetailsComponent,
    AcademyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
