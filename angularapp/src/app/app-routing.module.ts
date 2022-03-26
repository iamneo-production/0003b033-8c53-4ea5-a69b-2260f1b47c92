import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AdminDashbordComponent} from './admin-dashbord/admin-dashbord.component';
import {UserDashbordComponent} from './user-dashbord/user-dashbord.component';
import { AuthGuard } from './auth.guard';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';

import { AddAcademyComponent } from './add-academy/add-academy.component';
import { EditAcademyComponent } from './edit-academy/edit-academy.component';
import { AcademyDetailsComponent } from './academy-details/academy-details.component';
import { AcademyListComponent } from './academy-list/academy-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login', pathMatch:'full'},
  {path:'user/signup',component:SignupComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/dashbord',canActivate : [AuthGuard],component:UserDashbordComponent},
  {path:'admin/dashbord',canActivate : [AuthGuard],component:AdminDashbordComponent},
{path:'admin/viewStudent',canActivate : [AuthGuard],component:AdminStudentComponent},
{path:'admin/addStudent',canActivate : [AuthGuard],component:AddStudentComponent},
{path:'admin/editStudent/:id',canActivate : [AuthGuard],component:EditStudentComponent},

 {path: 'admin/academies', canActivate : [AuthGuard], component: AcademyListComponent},
  {path: 'admin/addinstitute', canActivate : [AuthGuard],component: AddAcademyComponent},
  {path: 'admin/editinstitute/:id', canActivate : [AuthGuard], component: EditAcademyComponent},
  {path: 'admin/viewinstitute/:id' , canActivate : [AuthGuard], component:AcademyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
