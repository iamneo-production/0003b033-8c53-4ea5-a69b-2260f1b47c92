import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from '../student.service';
import { StudentModel } from '../student-model';
import {Course} from '../course';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
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
   this.router.navigate(['user/courses']);
 }
 ngOnInit(): void {
   this.retriveStudent();
   this.retriveCourses();
 }


}
