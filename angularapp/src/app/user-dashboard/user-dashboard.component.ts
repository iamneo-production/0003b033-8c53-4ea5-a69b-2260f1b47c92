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
 constructor(private CourseService:CourseService,private router: Router) { }

 logout()
 { 
   sessionStorage.clear()
   this.router.navigate(['user/login']);
 }
 addFeedback()
 {
   this.router.navigate(['user/feedback']);
 }
private retriveCourses()
 {
 this.CourseService.getCourseList().subscribe(data=>(this.courses=data))
}
 viewCourses()
 {
   this.router.navigate(['user/courses']);
 }

 viewAcademy()
 {
  this.router.navigate(['user/viewcourses']);
 }
 ngOnInit(): void {
   this.retriveCourses();
 }


}
