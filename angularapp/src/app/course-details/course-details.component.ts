import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id!: number
  course!: Course

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']

    this.course = new Course()
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data
    },
      error => console.log(error))
  }

  goToCourseList(){
    this.router.navigate(['admin/courses'])
  }
  
  addCourse(){
    this.router.navigate(['admin/addcourse'])
  }

}
