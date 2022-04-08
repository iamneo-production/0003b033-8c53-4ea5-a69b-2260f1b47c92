import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AdminDashbordComponent} from './admin-dashbord/admin-dashbord.component';
import { AuthGuard } from './auth.guard';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdmissionComponent } from './admission/admission.component';
import { AddAcademyComponent } from './add-academy/add-academy.component';
import { EditAcademyComponent } from './edit-academy/edit-academy.component';
import { AcademyDetailsComponent } from './academy-details/academy-details.component';
import { AcademyListComponent } from './academy-list/academy-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './course-add/course-add.component';
import { EditCourseComponent } from './course-edit/course-edit.component';
import { UserCourseComponent } from './user-course/user-course.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAcademyComponent } from './user-academy/user-academy.component';
import {UserFeedbackComponent} from './user-feedback/user-feedback.component'


const routes: Routes = [
  {path:'',redirectTo:'/user/login', pathMatch:'full'},
  {path:'user/signup',component:SignupComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/dashbord',canActivate : [AuthGuard],component:UserDashboardComponent},
  {path:'admin/dashbord',canActivate : [AuthGuard],component:AdminDashbordComponent},
{path:'admin/viewStudent',canActivate : [AuthGuard],component:AdminStudentComponent},
{path:'admin/addStudent',canActivate : [AuthGuard],component:AddStudentComponent},
{path:'admin/editStudent/:id',canActivate : [AuthGuard],component:EditStudentComponent},
{path:'user/admission',canActivate : [AuthGuard],component:AdmissionComponent},
{path:'user/feedback',canActivate : [AuthGuard],component:UserFeedbackComponent},
{path: 'admin/courses',canActivate : [AuthGuard], component: CourseListComponent},
  {path: 'admin/addcourse',canActivate : [AuthGuard], component: AddCourseComponent},
  {path: 'admin/editcourse/:id',canActivate : [AuthGuard], component: EditCourseComponent},
  {path: 'admin/viewcourse/:id' ,canActivate : [AuthGuard], component: CourseDetailsComponent},
  {path: 'user/courses',canActivate : [AuthGuard], component: UserCourseComponent},
  {path: 'admin/academies', canActivate : [AuthGuard], component: AcademyListComponent},
  {path: 'admin/addinstitute', canActivate : [AuthGuard],component: AddAcademyComponent},
  {path: 'admin/editinstitute/:id', canActivate : [AuthGuard], component: EditAcademyComponent},
  {path: 'admin/viewinstitute/:id' , canActivate : [AuthGuard], component:AcademyDetailsComponent},
  {path: 'user/viewcourses' ,component:UserAcademyComponent },
  {path: 'admin/courses', component: CourseListComponent},
  {path: 'admin/addcourse', component: AddCourseComponent},
  {path: 'admin/editcourse/:id', component: EditCourseComponent},
  {path: 'admin/viewcourse/:id' , component: CourseDetailsComponent}
  /*{path: 'user/viewcourses', component: UserCourseComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

