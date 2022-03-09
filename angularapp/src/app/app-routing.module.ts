import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {AdminDashbordComponent} from './admin-dashbord/admin-dashbord.component';
import {UserDashbordComponent} from './user-dashbord/user-dashbord.component';
const routes: Routes = [
  {path:'',redirectTo:'/user/login', pathMatch:'full'},
  {path:'user/signup',component:SignupComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/dashbord',component:UserDashbordComponent},
  {path:'admin/dashbord',component:AdminDashbordComponent},
// {path:'admin/viewStudent',canActivate : [AuthGuard],component:AdminstudentComponent},
// {path:'admin/addStudent',canActivate : [AuthGuard],component:AddStudentComponent},
// {path:'admin/editStudent/:id',canActivate : [AuthGuard],component:EditStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
