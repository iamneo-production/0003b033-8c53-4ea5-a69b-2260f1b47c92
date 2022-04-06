import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'
import {UserModel} from '../user-model'
import {UsersignupService} from '../usersignup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:UserModel = new UserModel();
  constructor(private UsersignupService:UsersignupService) { }

  createUser()
{
this.UsersignupService.createUser(this.user).subscribe(data=>{console.log(data);
  alert("Signup success");
},error=>{
  if(error.status=400)
  {
    alert("User already exist with the email!");
  }
  console.log(error);
});
}
  onPasswordChange() {
    if (this.confirm_password.value == this.password1.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  
  // getting the form control elements
  get password1(): AbstractControl {
    return this.signupform.controls['password'];
  }
  get confirm_password(): AbstractControl {
    return this.signupform.controls['confirmpassword'];
  }
  signupform=new FormGroup({
	  email:new FormControl('',[Validators.required,Validators.email]),
	  username:new FormControl('',[Validators.required]),
    mobilenumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
    password:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9@#]{8,15}$")]),
    confirmpassword:new FormControl('',[Validators.required])
  })

  get email(){
	  return this.signupform.get('email');
  }
  get username(){
	  return this.signupform.get('username');
  }
  get mobilenumber(){
	  return this.signupform.get('mobilenumber');
  }
  get password(){
	  return this.signupform.get('password');
  }
  get confirmpassword(){
	  return this.signupform.get('confirmpassword');
  }

  signup(){
    this.createUser()
    
  }

  ngOnInit(): void {
  }

}
