import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {StudentModel} from '../student-model'
import {StudentService} from '../student.service'
import {FormGroup,FormControl,FormControlName,Validators, AbstractControl} from '@angular/forms'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student:StudentModel=new StudentModel();
  constructor(private router: Router,private StudentService:StudentService) { }
createStudent()
{
this.StudentService.createStudent(this.student).subscribe(data=>{console.log(data)
},error=>console.log(error));
}
  logout()
  { 
    sessionStorage.clear();
    this.router.navigate(['user/login']);
  }
  addStudent(){
    this.createStudent();
    alert("Student added successfully");
  }
  viewStudent()
  { 
    this.router.navigate(['admin/viewStudent']);
  }

  addStudentForm=new FormGroup({
	  studentID:new FormControl('',[Validators.required]),
	  studentName:new FormControl('',[Validators.required]),
    studentDOB:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{10}")]),
    age:new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
    
  }
  
}
