import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
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

  editcourse(id: number){
    this.router.navigate(['admin/editcourse',id])

  }

  deletecourse(id: number){
    if(window.confirm("You are going to delete the course !")){
      this.courseService.deleteCourse(id).subscribe( data =>{
        console.log("work")
        this.getCourse()
      })
    }
  }

  courseDetails(id: number){
    this.router.navigate(['admin/viewcourse',id])
  }

  goToCourseList(){
    this.router.navigate(['admin/courses'])
  }
  
  addCourse(){
    this.router.navigate(['admin/addcourse'])
  }
  viewAcademy()
  {
    this.router.navigate(['admin/academies'])
  }
  viewStudent(){
    this.router.navigate(['admin/viewStudent'])
  }

}
