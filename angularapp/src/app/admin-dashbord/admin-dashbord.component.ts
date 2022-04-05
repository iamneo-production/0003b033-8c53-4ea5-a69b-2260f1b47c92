import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from '../student.service';
import { StudentModel } from '../student-model';
import {Course} from '../course';
import {CourseService} from '../course.service';
@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {
   student:StudentModel[]|undefined;
   courses:Course[]|undefined;
  constructor(private StudentService:StudentService,private CourseService:CourseService,private router: Router) { }

  logout()
  { 
    sessionStorage.clear()
    this.router.navigate(['user/login']);
  }
  private retriveStudent()
  {
  this.StudentService.retriveStudent().subscribe(data=>(this.student=data))
 }
 private retriveCourses()
  {
  this.CourseService.getCourseList().subscribe(data=>(this.courses=data))
 }
  viewStudent()
  { 
    this.router.navigate(['admin/viewStudent']);
  }
  viewCourses()
  {
    this.router.navigate(['admin/courses']);
  }
  viewAcademy()
  {
    this.router.navigate(['admin/academies'])
  }
  ngOnInit(): void {
    this.retriveStudent();
    this.retriveCourses();
  }

}
