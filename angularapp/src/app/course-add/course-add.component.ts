import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-course',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class AddCourseComponent implements OnInit {

  selectedFile: any = null;

  course: Course = new Course()
  constructor(private courseService: CourseService,
    private router: Router , private http: HttpClient) { }

    viewCourses()
    {
      this.router.navigate(['admin/courses']);
    }

  ngOnInit(): void {
  }
  saveCourse() {
    this.courseService.addCourse(this.course).subscribe(data => {
      const fd = new FormData()
      console.log(data);
      
      this.goToCourseList()

    },
      error => console.log(error))
  }

  goToCourseList(){
    this.router.navigate(['admin/courses'])
  }
  onSubmit() {
    console.log(this.course)
    if(this.course.name && this.course.duration && this.course.timing && this.course.enrolled && this.course.description){
      this.saveCourse();
    }else{
      alert("Please fill the all the course details!")
    }
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
