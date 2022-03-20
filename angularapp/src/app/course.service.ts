import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = "https://8080-ecffeaecaaceddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/viewCourse"
  private addCourseURL = "https://8080-ecffeaecaaceddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/addCourse"
  private editCourseURL = "https://8080-ecffeaecaaceddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/editCourse"
  private deleteCourseURL = "https://8080-ecffeaecaaceddbefefcfadeceafbaedad.examlyiopb.examly.io/admin/deleteCourse"

  constructor(private httpClient: HttpClient) { }

  getCourseList(): Observable<Course[]>{
    let courses = this.httpClient.get<Course[]>(`${this.baseURL}`);
    console.log(courses);
    return courses;
  }
  addCourse(course: Course): Observable<Object>{
    let out = this.httpClient.post(`${this.addCourseURL}`, course);
    console.log(out);
    return out;
  }
  getCourseById(id: number): Observable<Course>{
    let out = this.httpClient.get<Course>(`${this.baseURL}/${id}`);
    console.log(out);
    return out;
  }
  editCourse(id: number, course: Course): Observable<Object>{
    let out = this.httpClient.put<Course>(`${this.editCourseURL}/${id}` , course)
    console.log(out);
    return out;
  }
  deleteCourse(id: number): Observable<Object>{
    let out = this.httpClient.delete(`${this.deleteCourseURL}/${id}`);
    console.log(out);
    return out;
  }
}
