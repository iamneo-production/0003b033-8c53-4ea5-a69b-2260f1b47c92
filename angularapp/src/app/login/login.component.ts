import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginModel } from '../login-model';
import {UserloginService} from '../userlogin.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:LoginModel=new LoginModel();
  constructor(private UserloginService:UserloginService,private router: Router) { }
  retriveUser()
  {
if(this.user.email=="admin@gmail.com" && this.user.password=="admin")
{
  sessionStorage.setItem('email','admin@gmail.com');
  this.gotoAdminDashbord();
}
else{
  this.UserloginService.retriveUser(this.user).subscribe(data=>{
    if(data)
    {
      sessionStorage.setItem('email',this.user.email as string);
      this.gotoUserDashbord();
    }
    else{
      alert("Email id or Password is wrong");
    }
  },error=>console.log(error));
}
 }
  login(){
    this.retriveUser()
  }
  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,]),
  })

  get email(){
    return this.loginform.get('email');
  }
  get password(){
    return this.loginform.get('password');
  }
  gotoUserDashbord()
  { 
    this.router.navigate(['user/dashbord']);
  }
  gotoAdminDashbord()
  { 
    this.router.navigate(['admin/dashbord']);
  }
  ngOnInit(): void {
  }

}
