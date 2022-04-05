import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {StudentModel} from '../student-model';
import {StudentService} from '../student.service'
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id!: number;
  student:StudentModel=new StudentModel();
  constructor(private studentservice:StudentService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentservice.getStudentById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.studentservice.updateStudent(this.id, this.student).subscribe( data =>{
      alert("Student details edited");
      this.goToStudentList();
    }
    , error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['admin/viewStudent']);
  }
  logout()
  { 
    sessionStorage.clear();
    this.router.navigate(['user/login']);
  }
  viewCourses()
  {
    this.router.navigate(['admin/courses']);
  }
  viewAcademy()
  {
    this.router.navigate(['admin/academies'])
  }
  viewStudent()
  { 
    this.router.navigate(['admin/viewStudent']);
  }
}
