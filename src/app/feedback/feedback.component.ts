import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: Feedback = {
    name:'',
    email:'',
    comments:''
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendFeedback() : void {
    let url = "http://localhost:8080/api/feedback";
    this.http.post(url, this.model).subscribe(
      response => {
        location.reload();
      },
      error => {
        alert("An error has occurred while submitting the feedback")
      }
    )
  }

}

export interface Feedback {
  name: string;
  email:string;
  comments:string;
}
