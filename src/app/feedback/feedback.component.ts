import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  sendFeedback() : void {
    alert(this.model.name)
  }

}

export interface Feedback {
  name: string;
  email:string;
  comments:string;
}
