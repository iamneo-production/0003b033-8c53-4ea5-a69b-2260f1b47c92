import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from '../student.service'
import { StudentModel } from '../student-model';
@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  student:StudentModel[]|undefined;
  constructor(private StudentService:StudentService,private router: Router) { }

  logout()
  { 
    sessionStorage.clear()
    this.router.navigate(['user/login']);
  }
 private retriveStudent()
  {
  this.StudentService.retriveStudent().subscribe(data=>(this.student=data))
 }
 viewCourses()
  {
    this.router.navigate(['admin/courses']);
  }
  viewAcademy()
  {
    this.router.navigate(['admin/academies'])
  }
 addStudent()
  { 
    this.router.navigate(['admin/addStudent']);
  }
  viewStudent()
  { 
    this.router.navigate(['admin/viewStudent']);
  }
  ngOnInit(): void {
    this.retriveStudent();
  }
editStudent(id:number)
{
  this.router.navigate(['admin/editStudent',id]);
}
  deleteStudent(studentID:number)
  {
    if(window.confirm('Are sure you want to delete this item ?')){
      this.StudentService.deleteStudent(studentID).subscribe(data=>{
        alert("Student sucessfully deleted");
        this.retriveStudent();
        })
     }   
  }
}
