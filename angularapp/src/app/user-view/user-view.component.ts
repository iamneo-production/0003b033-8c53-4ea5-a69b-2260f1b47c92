import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Academy } from '../academy';
import { AcademyService } from '../academy.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

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

selectcourse(){
  this.router.navigate(['user/courses'])
}



}

