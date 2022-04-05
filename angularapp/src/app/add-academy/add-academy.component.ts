import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Academy } from '../academy';
import { AcademyService } from '../academy.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-academy',
  templateUrl: './add-academy.component.html',
  styleUrls: ['./add-academy.component.css']
})
export class AddAcademyComponent implements OnInit {

  selectedFile: any = null;

  academy: Academy = new Academy()
  constructor(private academyService: AcademyService,
    private router: Router , private http: HttpClient) { }

  

  ngOnInit(): void {
  }
  saveInstitute() {
    this.academyService.addInstitute(this.academy).subscribe(data => {
      const fd = new FormData()
      console.log(data);
      
      this.goToAcademyList()

    },
      error => console.log(error))
  }

  goToAcademyList(){
    this.router.navigate(['admin/academies'])

  }
  onSubmit() {
    console.log(this.academy)
    this.saveInstitute();
  }

}
