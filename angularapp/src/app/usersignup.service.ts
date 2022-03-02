import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user-model';
@Injectable({
  providedIn: 'root'
})
export class UsersignupService {
  baseUrl='http://localhost:8888/user/signup';
  constructor(private httpClient:HttpClient) { }
  createUser(user:UserModel):Observable<object>{
    return this.httpClient.post<UserModel[]>(this.baseUrl,user);
  }
}
