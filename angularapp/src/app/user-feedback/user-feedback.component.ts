import { Component, OnInit } from '@angular/core';
import{FeedbackModel} from '../feedback-model'
import { Router } from '@angular/router';
import {FeedbackService} from '../feedback.service'

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {
feedback:FeedbackModel=new FeedbackModel();
  constructor(private router: Router,private FeedbackService:FeedbackService) { }

createFeedback()
{
this.FeedbackService.createFeedback(this.feedback).subscribe(data=>{console.log(data)
  this.gotoDashboard();
},error=>console.log(error));
}
gotoDashboard(){
  this.router.navigate(['user/dashbord'])
}
logout()
  { 
    sessionStorage.clear();
    this.router.navigate(['user/login']);
  }
  addFeedback(){
    this.createFeedback();
    alert("Feedback added successfully");
  }
  viewCourses()
  {
    this.router.navigate(['user/courses']);
  }
  viewAcademy()
  {
    this.router.navigate(['user/viewcourses'])
  }
  onSubmit() {
    console.log(this.feedback)
    this.addFeedback();
  }
  ngOnInit(): void {
  }

}
