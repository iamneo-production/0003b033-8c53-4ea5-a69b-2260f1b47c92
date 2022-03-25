import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent implements OnInit {
  
  courses!: Course[]

  constructor(private courseService: CourseService , private router: Router) {}

  ngOnInit(): void {
    this.getCourse()
  }

  private getCourse(){
    this.courseService.getCourseList().subscribe(data =>{
      this.courses = data;
    })
  }

  enrollCourse(id: number){
    this.router.navigate(['user/enrollCourse',id]) // need to change this accordingly!
  }

  goToCourseList(){
    this.router.navigate(['admin/courses'])
  }

  viewStudent(){
    this.router.navigate(['admin/viewStudent'])
  }

}
