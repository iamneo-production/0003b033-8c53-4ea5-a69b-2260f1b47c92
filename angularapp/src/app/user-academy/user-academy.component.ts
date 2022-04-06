import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Academy } from '../academy';
import { AcademyService } from '../academy.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-academy.component.html',
  styleUrls: ['./user-academy.component.css']
})
export class UserAcademyComponent implements OnInit {

  academies: Academy[]

  constructor(private academyService: AcademyService , private router: Router) {}

  ngOnInit(): void {
    this.getAcademies()
  }
  private getAcademies(){
    this.academyService.getAcademiesList().subscribe(data =>{
      this.academies = data;
    })
    

}
logout()
 { 
   sessionStorage.clear()
   this.router.navigate(['user/login']);
 }
 addFeedback()
 {
   this.router.navigate(['user/feedback']);
 }
 viewAcademy()
 {
  this.router.navigate(['user/viewcourses']);
 }
selectCourse(){
  this.router.navigate(['user/courses'])
}



}

