import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackModel } from './feedback-model';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl="https://8080-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io/user/viewFeedback";
  baseUrl1="https://8080-dfaeeaaefdfeeddbefefcfadeceafbaedad.examlyiopb.examly.io/user/addFeedback";
  constructor(private httpClient:HttpClient) { }
  retriveFeedback():Observable<FeedbackModel[]>{
    return this.httpClient.get<FeedbackModel[]>(this.baseUrl);
  }
  createFeedback(feedback:FeedbackModel):Observable<object>{
    return this.httpClient.post<FeedbackModel[]>(this.baseUrl1,feedback);
  }
  
}
