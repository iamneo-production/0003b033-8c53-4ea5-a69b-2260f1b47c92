import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from './student-model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl='https://8080-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/viewStudent';
  baseUrl1='https://8080-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/addStudent';
  baseUrl2='https://8080-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/deleteStudent';
  baseUrl3='https://8080-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/editStudent';
  constructor(private httpClient:HttpClient) { }
  retriveStudent():Observable<StudentModel[]>{
    return this.httpClient.get<StudentModel[]>(this.baseUrl);
  }
  createStudent(student:StudentModel):Observable<object>{
    return this.httpClient.post<StudentModel[]>(this.baseUrl1,student);
  }
  deleteStudent(studentID: number): Observable<object>{
    return this.httpClient.delete(`${this.baseUrl2}/${studentID}`);
  }
  getStudentById(id:number):Observable<StudentModel>
  {
    return this.httpClient.get<StudentModel>(`${this.baseUrl}/${id}`);
  }
  updateStudent(id: number, student: StudentModel): Observable<object>{
    return this.httpClient.put(`${this.baseUrl3}/${id}`, student);
  }
}
