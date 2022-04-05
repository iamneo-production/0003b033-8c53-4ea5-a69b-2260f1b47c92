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
import {AdminStudentComponent } from './admin-student/admin-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AuthGuard } from './auth.guard';
import { AdmissionComponent } from './admission/admission.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './course-add/course-add.component';
import { EditCourseComponent } from './course-edit/course-edit.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UserCourseComponent } from './user-course/user-course.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

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
    AdminStudentComponent,
    EditStudentComponent,
    AddStudentComponent,
    AdmissionComponent,
    AddAcademyComponent,
    EditAcademyComponent,
    AcademyDetailsComponent,
    AcademyListComponent,
    CourseListComponent,
    AddCourseComponent,
    EditCourseComponent,
    CourseDetailsComponent,
    UserCourseComponent,
    UserDashboardComponent
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
