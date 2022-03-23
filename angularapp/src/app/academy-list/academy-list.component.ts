import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Academy } from '../academy';
import { AcademyService } from '../academy.service';

@Component({
  selector: 'app-academy-list',
  templateUrl: './academy-list.component.html',
  styleUrls: ['./academy-list.component.css']
})
export class AcademyListComponent implements OnInit {
  
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

  editInstitute(id: number){
    this.router.navigate(['editinstitute',id])

  }

  deleteInstitute(id: number){
    
    this.academyService.deleteInstitute(id).subscribe( data =>{
      console.log("work")
      this.getAcademies()
    })
  }

  academyDetails(id: number){
    this.router.navigate(['viewinstitute',id])
  }

}
