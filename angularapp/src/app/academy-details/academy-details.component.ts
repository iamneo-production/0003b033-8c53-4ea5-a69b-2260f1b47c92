import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Academy } from '../academy';
import { AcademyService } from '../academy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academy-details',
  templateUrl: './academy-details.component.html',
  styleUrls: ['./academy-details.component.css']
})
export class AcademyDetailsComponent implements OnInit {

  id: number
  academy: Academy

  constructor(private route: ActivatedRoute, private academyService: AcademyService,private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']

    this.academy = new Academy()
    this.academyService.getAcademyById(this.id).subscribe(data => {
      this.academy = data
    },
      error => console.log(error))
  }
  logout()
  { 
    sessionStorage.clear()
    this.router.navigate(['user/login']);
  }
  viewStudent()
  { 
    this.router.navigate(['admin/viewStudent']);
  }
  viewCourses()
  {
    this.router.navigate(['admin/courses']);
  }
  viewAcademy()
  {
    this.router.navigate(['admin/academies'])
  }

}
