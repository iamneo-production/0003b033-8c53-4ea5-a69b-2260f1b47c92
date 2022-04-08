import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Academy } from './academy';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {

  private baseURL = "https://8080-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/academies"
  private addInstituteURL = "https://8080-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/addinstitute"
  private editInstituteURL = "https://8080-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/editinstitute"
  private deleteInstituteURL = "https://8080-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/deleteinstitute"

  constructor(private httpClient: HttpClient) { }

  getAcademiesList(): Observable<Academy[]>{
    return this.httpClient.get<Academy[]>(`${this.baseURL}`);
  }
  addInstitute(academy: Academy): Observable<Object>{
    return this.httpClient.post(`${this.addInstituteURL}`, academy);
  }
  getAcademyById(id: number): Observable<Academy>{
    return this.httpClient.get<Academy>(`${this.editInstituteURL}/${id}`)
  }
  editInstitute(id: number, academy: Academy): Observable<Object>{
    return this.httpClient.put<Academy>(`${this.editInstituteURL}/${id}` , academy)
  }
  deleteInstitute(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteInstituteURL}/${id}`)
  }
}
