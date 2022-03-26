import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from '../student.service';
import { StudentModel } from '../student-model';
@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css']
})
export class AdminDashbordComponent implements OnInit {
   student:StudentModel[]|undefined;
  constructor(private StudentService:StudentService,private router: Router) { }

  logout()
  { 
    sessionStorage.clear()
    this.router.navigate(['user/login']);
  }
  private retriveStudent()
  {
  this.StudentService.retriveStudent().subscribe(data=>(this.student=data))
 }
  viewStudent()
  { 
    this.router.navigate(['admin/viewStudent']);
  }
  viewAcademy()
  {
    this.router.navigate(['admin/academies'])
  }
  ngOnInit(): void {
    this.retriveStudent();
  }

}
