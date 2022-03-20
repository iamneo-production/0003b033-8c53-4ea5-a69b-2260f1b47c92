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
    this.saveCourse();
  }

  addCourse(){
    this.router.navigate(['admin/addcourse'])
  }

}
