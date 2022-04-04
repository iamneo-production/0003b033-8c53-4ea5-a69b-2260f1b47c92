import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from './login-model';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  baseUrl='https://8080-feedeaaecceeccaeddbefefcfadeceafbaedad.examlyiopb.examly.io/user/login';
  constructor(private httpClient:HttpClient) { }
  retriveUser(user:LoginModel):Observable<object>{
    return this.httpClient.post<LoginModel[]>(this.baseUrl,user);
  }
}