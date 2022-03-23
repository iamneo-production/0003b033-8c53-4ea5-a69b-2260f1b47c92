import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Academy } from '../academy';
import { AcademyService } from '../academy.service';


@Component({
  selector: 'app-edit-academy',
  templateUrl: './edit-academy.component.html',
  styleUrls: ['./edit-academy.component.css']
})
export class EditAcademyComponent implements OnInit {

 id: number;
  academy: Academy = new Academy()
  constructor(private academyService: AcademyService , private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
    
      this.id = this.route.snapshot.params['id']
  
      this.academyService.getAcademyById(this.id).subscribe(data =>{
        console.log(this.id)
        this.academy = data;
        console.log(data)
      },
       error => console.log(error))
  }

  

  goToAcademyList(){
    this.router.navigate(['/academies'])

  }

  onSubmit() {
    this.academyService.editInstitute(this.id, this.academy).subscribe(data =>{
      this.goToAcademyList()
    },
    error => console.log(error)
    );
  }
   
  

}
