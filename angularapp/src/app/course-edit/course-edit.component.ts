import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class EditCourseComponent implements OnInit {

  id!: number;
  course: Course = new Course()
  constructor(private courseService: CourseService , private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
    
      this.id = this.route.snapshot.params['id']
  
      this.courseService.getCourseById(this.id).subscribe(data =>{
        console.log(this.id)
        this.course = data;
        console.log(data)
      },
       error => console.log(error))
  }

  

  goToCourseList(){
    this.router.navigate(['/courses'])

  }

  onSubmit() {
    this.courseService.editCourse(this.id, this.course).subscribe(data =>{
      this.goToCourseList()
    },
    error => console.log(error)
    );
  }
  
  addCourse(){
    this.router.navigate(['admin/addcourse'])
  }

}
