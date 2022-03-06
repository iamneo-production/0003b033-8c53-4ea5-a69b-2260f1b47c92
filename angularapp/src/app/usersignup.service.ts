import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user-model';
@Injectable({
  providedIn: 'root'
})
export class UsersignupService {
  baseUrl='https://8080-febbacaecaaeddbefefcfadeceafbaedad.examlyiopb.examly.io/user/signup';
  constructor(private httpClient:HttpClient) { }
  createUser(user:UserModel):Observable<object>{
    return this.httpClient.post<UserModel[]>(`${this.baseUrl}`,user);
  }
}
